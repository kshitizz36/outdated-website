import { GetServerSideProps, GetStaticProps } from 'next';


export const getServerSideProps = async () => {
  const response = await fetch('https://api.example.com/posts');
  const data = await response.json();
  return { props: { posts: data } };
};

import React, { useState, useEffect } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://api.example.com/posts');
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

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