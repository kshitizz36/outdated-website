// pages/index.js (Updated Next.js Example)

import React from 'react';
import Head from 'next/head';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Updated Next.js Example</title>
      </Head>
      <h1>Updated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Fetch data on the server using getServerSideProps or getStaticProps
export async function getServerSideProps() {
  try {
    const res = await fetch('https://api.example.com/posts');
    const data = await res.json();

    return {
      props: {
        posts: data
      }
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return {
      props: {
        posts: []
      }
    };
  }
}