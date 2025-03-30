import { drizzle } from 'drizzle-orm/neon-http';
// import config from '@/lib/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABSE_URL!)

export const db = drizzle({ client:sql, casing: "snake_case" });


// const sql = neon(config.env.databaseUrl)