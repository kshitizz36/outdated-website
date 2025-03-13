import React from 'react';
import { GetServerSideProps } from 'next/page';

function Home({ posts }: { posts: any[] }) {
  return (
    <div>
      <h1>Outdated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

type LandingPageProps = {
  posts: any[];
};

export const getServerSideProps: GetServerSideProps<LandingPageProps> = async () => {
  const res = await fetch('https://api.example.com/posts');
  const data = await res.json();
  return {
    props: { posts: data }
  };
};

export default Home;