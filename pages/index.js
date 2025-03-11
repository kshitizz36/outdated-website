import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';

export default function Home({ posts }) {
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
}

export async function getServerSideProps() {
  const data = await fetch('https://api.example.com/posts').then((res) => res.json());
  return {
    props: {
      posts: data,
    },
  };
}