import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://api.example.com/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>Up-to-date Next.js Example</title>
      </Head>
      <h1>Up-to-date Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

Home.getLayout = function getLayout() {
  return Home;
};

export { Home };
