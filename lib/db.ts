import { Pool } from 'pg';
import { sql } from '@vercel/postgres';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function query(text: string, params: any[]) {
  const result = await sql.query(text, params);
  return result;
}
