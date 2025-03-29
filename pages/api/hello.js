import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse).

try {
  res.status(200).json({ name: 'John Doe' });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal Server Error' });
}