module.exports = class Data1707892575022 {
    name = 'Data1707892575022'

    async up(db) {
        await db.query(`CREATE TABLE "registration" ("id" character varying NOT NULL, "referrer" text, "destroyed" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_cb23dc9d28df8801b15e9e2b8d6" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_4001c5e40de989ecb7e8786ddc" ON "registration" ("referrer") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "registration"`)
        await db.query(`DROP INDEX "public"."IDX_4001c5e40de989ecb7e8786ddc"`)
    }
}
