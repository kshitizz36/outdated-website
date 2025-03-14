import { NextApiRequest, NextApiResponse } from 'next'

default export handler = async function(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ name: 'John Doe' })
}