import React from 'react';
import Head from 'next/head';

function Home({posts}) {
  return (
    <div>
      <Head>
        <title> Outdated Next.js Example </title>
      </Head>
      <h1> Outdated Next.js Example </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/posts').then((res) => res.json());
  return {
    props: {
      posts: res,
    },
  };
}

export default Home;