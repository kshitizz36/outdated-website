import { GetStaticProps } from 'next';
import Head from 'next/head';

const Home = () => {
  const { posts } = useStaticProps();

  return (
    <div>
      <Head>
        <title>Up-to-Date Next.js Example</title>
      </Head>
      <h1>Up-to-Date Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  // Fetch some data on the server
  const response = await fetch('https://api.example.com/posts');
  const { posts } = await response.json();

  return {
    posts,
  };
};