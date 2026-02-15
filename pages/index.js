// pages/index.js (Updated Next.js Example)

import React from 'react';
import Head from 'next/head';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Modern Next.js Example</title>
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

// Use getServerSideProps or getStaticProps for data fetching
export async function getServerSideProps() {
  try {
    const response = await fetch('https://api.example.com/posts');
    const posts = await response.json();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}