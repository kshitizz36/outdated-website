import { GetServerSideProps } from 'next';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Outdated Next.js Example</title>
      </Head>
      <h1>Outdated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.example.com/posts');
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };

}