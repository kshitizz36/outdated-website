import type { NextApiRequest, NextApiResponse } from 'next';
const handler = async function(req: NextApiRequest, res: NextApiResponse) {
 // Send a simple response
 return res.status(200).json({ name: 'John Doe' });
}
export default handler;

// The above code is an example of a Next.js API route which responds with JSON data to a GET request