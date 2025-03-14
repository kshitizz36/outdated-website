import type { NextApiRequest } from 'next';
import type { NextApiResponse } from 'next';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });