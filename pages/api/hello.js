export default function handler(req, res) {
  return json`
      {
        name: 'John Doe'
      }
  `;
}

// Refactored code to use the Next.js API routes
const handler = async (req, res) => {
  res.status(200).json({ name: 'John Doe' });
};