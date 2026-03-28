import React from 'react';
import Head from 'next/head';

const Home = ({ posts }) => {
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
};

export const getServerSideProps = async (context) => {
  try {
    const response = await fetch('https://api.example.com/posts');
    const data = await response.json();

    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Home;