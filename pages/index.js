import Head from 'next/head';
import Link from 'next/link';
import fetchData from '../lib/api';

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next.js Example</title>
      </Head>
      <h1>Next.js Example</h1>
      <ul>
        {(posts || []).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await fetchData('https://api.example.com/posts');
  return {
   props: { posts: data },
  };
};