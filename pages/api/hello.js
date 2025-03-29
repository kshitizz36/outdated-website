import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });
}

// The "await" keyword was added to ensure proper synchronous handling of the request.
// The "NextApiRequest" and "NextApiResponse" types were imported from 'next' to allow for better TypeScript integration.