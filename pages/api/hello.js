import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ name: string }>,
) {
  return res.status(200).json({ name: 'John Doe' });
}