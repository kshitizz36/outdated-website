import React from 'react';
import Head from 'next/head';

function Home(props) {
  const { posts } = props;

  return (
    <div>
      <Head>
        <title>Outdated Next.js Example</title>
      </Head>
      <h1>Outdated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch some data on the server
  const data = await fetch('https://api.example.com/posts').then((res) =>
    res.json()
  );

  return {
    props: {
      posts: data,
    },
  };
}

export default Home;

// Comments added by AI Assistant