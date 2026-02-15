// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // Optional: Add request method validation
  if (req.method === 'GET') {
    res.status(200).json({ name: "John Doe" });
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}