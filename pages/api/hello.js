import { NextApiRequest, NextApiResponse } from 'next';
import { JSONSchemaType } from 'ajv/dist/2020/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });
}