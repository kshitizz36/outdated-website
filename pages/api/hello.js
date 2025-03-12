// To handle API routes in Next.js, you can now use the new route file approach.
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Instead of res.status() and res.json(), use the built-in functionality of NextApiResponse.
  res.status(200).json({ name: "John Doe" });
}