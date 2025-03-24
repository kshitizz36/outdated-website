import { GetStaticProps } from 'next';
import React from 'react';
import Head from 'next/head';

interface Data {
  id: number;
  title: string;
}

export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const data: Data[] = await res.json();

  return {
    posts: data,
    revalidate: 10,
  };
}

export default function Home({ posts }: { posts: Data[] }) {
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