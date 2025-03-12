import React, { useState, useEffect } from 'react';
import Head from 'next/head';

function Home({ posts }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Up to Date Next.js Example</title>
      </Head>
      <h1>Up to Date Next.js Example</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://api.example.com/posts');
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}
export default Home;