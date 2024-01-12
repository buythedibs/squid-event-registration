module.exports = class Data1706167616716 {
    name = 'Data1706167616716'

    async up(db) {
        await db.query(`CREATE TABLE "cheque" ("id" character varying NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "amount" numeric NOT NULL, "token_address" text, "memo" text, "fee" numeric NOT NULL, "status" integer NOT NULL, "recipient_azero_id" text, "sender_azero_id" text, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_bf81eabc52f4f3320378a80f77e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_a3a9fb8d4729d73303bd0cd61e" ON "cheque" ("from") `)
        await db.query(`CREATE INDEX "IDX_8fe39c52609afee42b99b216a1" ON "cheque" ("to") `)
        await db.query(`CREATE INDEX "IDX_5dca032510268c1b887f99fdf8" ON "cheque" ("status") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "cheque"`)
        await db.query(`DROP INDEX "public"."IDX_a3a9fb8d4729d73303bd0cd61e"`)
        await db.query(`DROP INDEX "public"."IDX_8fe39c52609afee42b99b216a1"`)
        await db.query(`DROP INDEX "public"."IDX_5dca032510268c1b887f99fdf8"`)
    }
}
