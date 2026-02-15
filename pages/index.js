// pages/index.js (Updated Next.js Page)

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div>
      <Head>
        <title>Modern Next.js Example</title>
        <meta name="description" content="Updated Next.js page" />
      </Head>
      <h1>Modern Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Server-side rendering using getServerSideProps
export async function getServerSideProps() {
  try {
    const response = await fetch('https://api.example.com/posts');
    const posts = await response.json();

    return {
      props: {
        initialPosts: posts
      }
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return {
      props: {
        initialPosts: []
      }
    };
  }
}