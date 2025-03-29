import React from 'react';
import Head from 'next/head';

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next.js Example</title>
      </Head>
      <h1>Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}

export default Home;