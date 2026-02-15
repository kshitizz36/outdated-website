// Next.js API route with TypeScript and modern NextJS 13+ syntax
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ name: "John Doe" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}