// Next.js API route with modern TypeScript and improved error handling
export default async function handler(req: NextApiRequest, res: NextApiResponse<{name: string}>) {
  try {
    if (req.method === 'GET') {
      return res.status(200).json({ name: 'John Doe' });
    } else {
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}