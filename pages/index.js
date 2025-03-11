import { GetServerSideProps } from 'next';
import React from 'react';

function Home({ posts }) {
  return (
    <div>
      <title>Updated Next.js Example</title>
      <h1>Updated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/posts');
  const data = await res.json();
  return {
    props: { posts: data },
  };
 }

 export default Home;