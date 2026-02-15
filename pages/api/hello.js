// Next.js API route with modern syntax and TypeScript type annotations
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}