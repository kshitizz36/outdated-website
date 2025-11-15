import { NextApiRequest, NextApiResponse } from 'next';

export const hello = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
}

export default hello;

// In an API route, we do not export 'const handler' directly as Next.js will automatically find and execute API routes based on the function name, which in this case is 'hello'.