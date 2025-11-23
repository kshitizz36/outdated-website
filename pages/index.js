import React from 'react';
import Head from 'next/head';

export async function getServerSideProps() {
  // Fetch some data on the server
  const res = await fetch('https://api.example.com/posts');
  const data = await res.json();

  return {
    props: { // Added props key
      posts: data,
    },
  };
}

function Home({ posts }) {
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

export default Home;