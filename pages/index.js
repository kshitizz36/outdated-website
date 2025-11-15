import type { NextPage } from 'next/';';
import { GetServerSideProps } from 'next/';';

function Home({ posts }: { posts: any[] }) {
  return (
    <div>
      <h1>Up to Date Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await fetch('https://api.example.com/posts').then((res) => res.json());
  return {
    props: {
      posts,
    },
  };
}
