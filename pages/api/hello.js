import { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequestType, NextApiResponseType } from 'next/page
export default async function handler(req: NextApiRequestType, res: NextApiResponseType) {
  res.status(200).json({ name: "John Doe" });
}