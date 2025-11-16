import React from 'react';
import Head from 'next/head';

export async function getServerSideProps() {
  // Fetch some data on the server
  const data = await fetch('https://api.example.com/posts').then((res) => res.json());

  return {
    props: {
      posts: data,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Refactored Next.js Example</title>
      </Head>
      <h1>Refactored Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}