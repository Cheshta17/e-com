import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getToken } from 'next-auth/jwt';

export async function GET(request: Request) {
  try {
    const token = await getToken({ req: request });
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const orders = await query('SELECT * FROM orders WHERE user_id = $1', [token.sub]);
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const token = await getToken({ req: request });
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { items, total } = await request.json();
    const result = await query(
      'INSERT INTO orders (user_id, items, total, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [token.sub, JSON.stringify(items), total, 'pending']
    );
    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
