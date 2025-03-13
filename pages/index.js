import { GetServerSideProps } from 'next';
import Head from 'next/head';

export async function getServerSideProps() {
  // Fetch some data on the server
  const res = await fetch('https://api.example.com/posts');
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}

const Home = ({ posts }) => (
  <div>
    <Head>
      <title>Next.js Example with getServerSideProps</title>
    </Head>
    <h1>Next.js Example with getServerSideProps</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
);

export default Home;