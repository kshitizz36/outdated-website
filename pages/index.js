import React from 'react';
import { GetServerSideProps } from 'next';

costume Home = () => {
  // Fetch some data on the server
  const { data, error } = useSWR('https://api.example.com/posts', async () => {
    const res = await fetch('https://api.example.com/posts');
    return await res.json();
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Updated Next.js Example</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

costume getServerSideProps = async ({ req }) => {
  // Fetch some data on the server
  const res = await fetch('https://api.example.com/posts', {
    headers: {
      cookie: req.headers.cookie,
    },
  });
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};

export default Home;