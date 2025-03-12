import { NextApiRequest, NextApiResponse } from 'next'; 
import { json } from 'express'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ name: 'John Doe' });
}