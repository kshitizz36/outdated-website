#!/usr/bin/env node
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('https://api.example.com/posts')
    res.status(200).json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch posts' })
  }
}

export async function getServerSideProps() {
  return {
    props: {
      posts: await handler({ method: 'GET' })
    }
  }
}
