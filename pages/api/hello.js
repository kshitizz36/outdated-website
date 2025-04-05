import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ name: 'John Doe' });
};

export default handler;

// API routes support: https://nextjs.org/docs/api-routes/overview
// Set API routes in pages/api/

// Commit message:
// "docs: update next.js handler function"
