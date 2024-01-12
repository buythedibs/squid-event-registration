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
import * as azSafeSend from "./abi/safe_send";
import { Cheque } from "./model/generated";

export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>

const SAFE_SEND_CONTRACT_ADDRESS_SS58 =
  "5EZJQm6g64rhajevm6k4NZmPgyiy95FUAk8Hdz1yaHWo83np";
const SAFE_SEND_CONTRACT_ADDRESS = toHex(ss58.decode(SAFE_SEND_CONTRACT_ADDRESS_SS58).bytes);
const SS58_PREFIX = ss58.decode(SAFE_SEND_CONTRACT_ADDRESS_SS58).prefix;

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive('aleph-zero-testnet', {release: 'ArrowSquid'}),
    chain: {
      url: "wss://ws.test.azero.dev",
      rateLimit: 1000
    }
  })
  .addContractsContractEmitted({
    contractAddress: [SAFE_SEND_CONTRACT_ADDRESS]
  })
  .setFields({
      block: {
          timestamp: true
      }
  })
  .setBlockRange({
    // genesis block happens to not have a timestamp, so it's easier
    // to start from 1 in cases when the deployment height is unknown
    from: 52780000
  })

processor.run(new TypeormDatabase({supportHotBlocks: true}), async ctx => {
  const cheques = extractCheques(ctx);
  const chequeUpdates = extractChequeUpdates(ctx);

  // 1. Create new cheques
  const newCheques = cheques.map((cheque) => {
    return new Cheque({
      id: cheque.id,
      from: cheque.from,
      to: cheque.to,
      amount: cheque.amount,
      tokenAddress: cheque.token_address,
      memo: cheque.memo,
      fee: cheque.fee,
      status: 0,
      recipientAzeroId: cheque.recipient_azero_id,
      senderAzeroId: cheque.sender_azero_id,
      createdAt: cheque.created_at,
      updatedAt: cheque.created_at,
    });
  });
  await ctx.store.insert(newCheques);

  // 2. Update cheques
  for (const gu of chequeUpdates) {
    const cheque = await ctx.store.get(Cheque, gu.id);
    if (cheque) {
      cheque.status = gu.status;
      cheque.updatedAt = gu.updated_at;
      await ctx.store.save(
        cheque
      );
    }
  }
});

interface ChequeCreateEvent {
  id: string;
  from: string;
  to: string;
  amount: bigint;
  token_address?: string;
  memo?: string;
  fee: bigint;
  recipient_azero_id?: string;
  sender_azero_id?: string;
  created_at: Date;
}

// 1 => Collected
// 2 => Cancelled
interface ChequeUpdateEvent {
  id: string;
  status: number;
  updated_at: Date;
}

function extractCheques(ctx: ProcessorContext<Store>): ChequeCreateEvent[] {
  const cheques: ChequeCreateEvent[] = [];
  for (const block of ctx.blocks) {
    assert(block.header.timestamp, `Block ${block.header.height} had no timestamp`)
    for (const event of block.events) {
      if (
        event.name === "Contracts.ContractEmitted" &&
        event.args.contract === SAFE_SEND_CONTRACT_ADDRESS
      ) {
        const decodedEvent = azSafeSend.decodeEvent(event.args.data);
        if (decodedEvent.__kind === "Create") {
          const cheque: ChequeCreateEvent = {
            id: String(decodedEvent.id),
            from: ss58.codec(SS58_PREFIX).encode(decodedEvent.from),
            to: ss58.codec(SS58_PREFIX).encode(decodedEvent.to),
            amount: decodedEvent.amount,
            token_address: undefined,
            memo: decodedEvent.memo,
            fee: decodedEvent.fee,
            recipient_azero_id: decodedEvent.recipientAzeroId,
            sender_azero_id: decodedEvent.senderAzeroId,
            created_at: new Date(block.header.timestamp)
          };
          if (decodedEvent.tokenAddress) {
            cheque.token_address = ss58.codec(SS58_PREFIX).encode(decodedEvent.tokenAddress)
          }
          cheques.push(cheque);
        }
      }
    }
  }
  return cheques;
}

function extractChequeUpdates(ctx: ProcessorContext<Store>): ChequeUpdateEvent[] {
  const chequeUpdateEvents: ChequeUpdateEvent[] = [];
  for (const block of ctx.blocks) {
    assert(block.header.timestamp, `Block ${block.header.height} had no timestamp`)
    for (const event of block.events) {
      if (
        event.name === "Contracts.ContractEmitted" &&
        event.args.contract === SAFE_SEND_CONTRACT_ADDRESS
      ) {
        const decodedEvent = azSafeSend.decodeEvent(event.args.data);
        if (decodedEvent.__kind === "Cancel") {
          chequeUpdateEvents.push({
            id: String(decodedEvent.id),
            status: 2,
            updated_at: new Date(block.header.timestamp),
          });
        } else if (decodedEvent.__kind === "Collect") {
          chequeUpdateEvents.push({
            id: String(decodedEvent.id),
            status: 1,
            updated_at: new Date(block.header.timestamp),
          });
        }
      }
    }
  }
  return chequeUpdateEvents;
}
