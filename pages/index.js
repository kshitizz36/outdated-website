import React from 'react';
import Head from 'next/head';

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Up to Date Next.js Example</title>
      </Head>
      <h1>Up to Date Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch('https://api.example.com/posts').then((res) => res.json());
  return {
    props: {
      posts: data,
    },
  };
}

export default Home;
