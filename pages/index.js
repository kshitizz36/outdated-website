import Head from 'next/head';
import Link from 'next/link';

export function getServerSideProps() {
  return {
    props: {
      posts: [
        {id: 1, title: 'Example Post 1'},
        {id: 2, title: 'Example Post 2'}
      ],
    },
  };
}

export default function Home(
    { posts }
) {
  return (
    <div>
      <Head>
        <title>Example Post</title>
      </Head>
      <h1>Example Post</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}