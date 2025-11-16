import { NextApiRequest, NextApiResponse } from 'next';

const handler = async function (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
};

export default handler;