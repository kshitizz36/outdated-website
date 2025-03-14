import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ name: "John Doe" });
  return res.status(200);
}

// Changes made to the original code:
// The handler function was made classless to adhere to modern NextJS API route functionality
// The NextApiRequest and NextApiResponse types were added as required import
// async/await syntax was implemented
// res.json() method used in place of res.status() and res.json()