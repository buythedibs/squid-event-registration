import assert from 'assert';
import { lookupArchive } from "@subsquid/archive-registry";
import * as ss58 from "@subsquid/ss58";
import { toHex } from "@subsquid/util-internal-hex";
import {
  BlockHeader,
  DataHandlerContext,
  Event as _Event,
  SubstrateBatchProcessor,
  SubstrateBatchProcessorFields,
} from "@subsquid/substrate-processor";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import * as azEventRegistration from "./abi/az_event_registration";
import { Registration } from "./model/generated";

export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>

const EVENT_REGISTRATION_CONTRACT_ADDRESS_SS58 =
  "5CMnrneNCiYqpib3pA4xmtv3yngHWGNEdfdU9bvSgsLyembz";
const EVENT_REGISTRATION_CONTRACT_ADDRESS = toHex(ss58.decode(EVENT_REGISTRATION_CONTRACT_ADDRESS_SS58).bytes);
const SS58_PREFIX = ss58.decode(EVENT_REGISTRATION_CONTRACT_ADDRESS_SS58).prefix;

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive('aleph-zero', {release: 'ArrowSquid'}),
    chain: {
      url: "wss://ws.azero.dev",
      rateLimit: 1000
    }
  })
  .addContractsContractEmitted({
    contractAddress: [EVENT_REGISTRATION_CONTRACT_ADDRESS]
  })
  .setFields({
      block: {
          timestamp: true
      }
  })
  .setBlockRange({
    // genesis block happens to not have a timestamp, so it's easier
    // to start from 1 in cases when the deployment height is unknown
    from: 72_459_128
  })

processor.run(new TypeormDatabase({supportHotBlocks: true}), async ctx => {
  const registrations = extractRegistrations(ctx);
  const updates = extractUpdates(ctx);
  const destroys = extractDestroys(ctx);

  // 1. Create registrations
  const newRegistrations = registrations.map((registration) => {
    return new Registration({
      id: registration.address,
      referrer: registration.referrer,
      destroyed: false,
      createdAt: registration.created_at,
      updatedAt: registration.created_at,
    });
  });
  await ctx.store.insert(newRegistrations);

  // 2. Update registrations
  for (const gu of updates) {
    const registration = await ctx.store.get(Registration, gu.address);
    if (registration) {
      registration.referrer = gu.referrer;
      registration.updatedAt = gu.updated_at;
      await ctx.store.save(
        registration
      );
    }
  }

  // 3. Destroys
  for (const gu of destroys) {
    const registration = await ctx.store.get(Registration, gu.address);
    if (registration) {
      registration.destroyed = true;
      registration.updatedAt = gu.updated_at;
      await ctx.store.save(
        registration
      );
    }
  }
});

interface RegistrationEvent {
  address: string;
  referrer?: string;
  created_at: Date;
}

interface UpdateEvent {
  address: string;
  referrer?: string;
  updated_at: Date;
}

interface DestroyEvent {
  address: string;
  updated_at: Date;
}

function extractRegistrations(ctx: ProcessorContext<Store>): RegistrationEvent[] {
  const registrations: RegistrationEvent[] = [];
  for (const block of ctx.blocks) {
    assert(block.header.timestamp, `Block ${block.header.height} had no timestamp`)
    for (const event of block.events) {
      if (
        event.name === "Contracts.ContractEmitted" &&
        event.args.contract === EVENT_REGISTRATION_CONTRACT_ADDRESS
      ) {
        const decodedEvent = azEventRegistration.decodeEvent(event.args.data);
        if (decodedEvent.__kind === "Register") {
          const registration: RegistrationEvent = {
            address: ss58.codec(SS58_PREFIX).encode(decodedEvent.address),
            referrer: undefined,
            created_at: new Date(block.header.timestamp)
          };
          if (decodedEvent.referrer) {
            registration.referrer = ss58.codec(SS58_PREFIX).encode(decodedEvent.referrer)
          }
          registrations.push(registration);
        }
      }
    }
  }
  return registrations;
}

function extractUpdates(ctx: ProcessorContext<Store>): UpdateEvent[] {
  const updateEvents: UpdateEvent[] = [];
  for (const block of ctx.blocks) {
    assert(block.header.timestamp, `Block ${block.header.height} had no timestamp`)
    for (const event of block.events) {
      if (
        event.name === "Contracts.ContractEmitted" &&
        event.args.contract === EVENT_REGISTRATION_CONTRACT_ADDRESS
      ) {
        const decodedEvent = azEventRegistration.decodeEvent(event.args.data);
        if (decodedEvent.__kind === "Update") {
          const registration: UpdateEvent = {
            address: ss58.codec(SS58_PREFIX).encode(decodedEvent.address),
            referrer: undefined,
            updated_at: new Date(block.header.timestamp),
          };
          if (decodedEvent.referrer) {
            registration.referrer = ss58.codec(SS58_PREFIX).encode(decodedEvent.referrer)
          }
          updateEvents.push(registration);
        }
      }
    }
  }
  return updateEvents;
}

function extractDestroys(ctx: ProcessorContext<Store>): DestroyEvent[] {
  const destroyEvents: DestroyEvent[] = [];
  for (const block of ctx.blocks) {
    assert(block.header.timestamp, `Block ${block.header.height} had no timestamp`)
    for (const event of block.events) {
      if (
        event.name === "Contracts.ContractEmitted" &&
        event.args.contract === EVENT_REGISTRATION_CONTRACT_ADDRESS
      ) {
        const decodedEvent = azEventRegistration.decodeEvent(event.args.data);
        if (decodedEvent.__kind === "Destroy") {
          const registration: DestroyEvent = {
            address: ss58.codec(SS58_PREFIX).encode(decodedEvent.address),
            updated_at: new Date(block.header.timestamp),
          };
          destroyEvents.push(registration);
        }
      }
    }
  }
  return destroyEvents;
}
