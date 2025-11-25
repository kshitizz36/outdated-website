import React from 'react';
import Head from 'next/head';

// Use getServerSideProps for data fetching on each request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api.example.com/posts');
  const data = await res.json();

  // Pass data to the page component as props
  return { props: { posts: data } };
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