#!/usr/bin/env node

import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const fetchPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const postResponse = await axios.get("https://api.example.com/posts")
    const posts = postResponse.data

    res.status(200).json(posts)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to fetch posts" })
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return fetchPosts(req, res)
  }
  res.status(405).json({ error: "Method not allowed" })
}
