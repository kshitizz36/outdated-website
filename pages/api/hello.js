import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" })
}

// Comments and explanations for code changes
// 
// This is a basic Next.js API route. It exports a function named 'handler' that
// accepts a 'req' object (NextApiRequest) and a 'res' object (NextApiResponse).
// These objects contain information about the HTTP request and response, respectively.
// 
// In this example, we are simply returning a JSON object with the name 'John Doe'
// and a 200 status code.