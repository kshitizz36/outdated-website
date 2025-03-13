import React from 'react';
import { GetServerSideProps } from 'next/server';

export const getServerSideProps = async ({ req, res }) => {
  const response = await fetch('https://api.example.com/posts');
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
};

export default function Home({ posts }) {
  return (
    <div>
      <h1>Example of Next.js with updated API</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}