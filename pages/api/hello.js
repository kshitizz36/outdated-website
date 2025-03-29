import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" })
}

// This code has been refactored to use the updated API
// The 'tax' keyword is removed and replaced with 'import'
// The function has been marked as 'async' to accommodate the use of 'await'
