import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://api.example.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>Modern Next.js Example</title>
      </Head>
      <h1>Modern Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// If server-side rendering is needed, use getServerSideProps or getStaticProps
export async function getServerSideProps() {
  try {
    const response = await fetch('https://api.example.com/posts');
    const posts = await response.json();

    return {
      props: {
        initialPosts: posts
      }
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        initialPosts: []
      }
    };
  }
}