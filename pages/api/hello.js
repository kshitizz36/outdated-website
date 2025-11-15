export default async function handler(req, res) {
  try {
    res.status(200).json({ name: "John Doe" });
  } catch (err) {
    res.status(500).
  }
}
// Next.js API route support: https://nextjs.org/docs/api-routes,introduction