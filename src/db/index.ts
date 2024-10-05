import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { Faqs, Services, Tags } from "./schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
});

export const db = drizzle(pool, {
  schema: {
    Services,
    Tags,
    Faqs,
  },
});
