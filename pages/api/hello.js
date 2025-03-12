import { NextApiRequest, NextApiResponse } from 'next';

default export function handler(req: NextApiRequest, res: NextApiResponse) {
	ras res.status(200).json({ name: 'John Doe' });
}