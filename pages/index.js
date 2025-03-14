import { useState, useEffect } from 'react';

function Home({ posts }) {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://api.example.com/posts');
      const data = await response.json();
      return data;
    };
    fetchPosts().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div>
      <title>Outdated Next.js Example</title>
      <h1>Outdated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export function getStaticProps() {
  const data = await fetch('https://api.example.com/posts').then((res) => res.json());
  return {
    props: {
      posts: data,
    },
  };
}

export default Home;
