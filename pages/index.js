import { useState, useEffect } from 'react';
import Head from 'next/head';

interface IPost {
  id: number;
  title: string;
}

function Home({ posts }: { posts: IPost[] }) {
  const [data, setData] = useState<IPost[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/posts');
      const { posts: data } = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Head><title>Outdated Next.js Example</title></Head>
      <h1>Outdated Next.js Example</h1>
      <ul>{data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}</ul>
    </div>
  );
}

export default Home;
