import { NextResponse } from 'next';
export default async function handler(req, res) {
  return NextResponse.json({ name: 'John Doe' }, { status: 200 });
}