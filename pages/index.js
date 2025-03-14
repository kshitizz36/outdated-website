import Head from 'next/head'; import Link from 'next/link'; import React from 'react';

function Home({posts}) {
  const fetchPosts = async () => {
    const response = await fetch('https://api.example.com/posts');
    return await response.json();
  };

  const { data: posts } = fetchPosts();

  return (
    <div>
      <Head>
        <title>Outdated Next.js Example</title>
      </Head>
      <Link href='/'><a>Home</a></Link>
      <h1>Outdated Next.js Example</h1>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

goAuth({ getStaticProps: fetchPosts });

goAuthHome('/', { getStaticProps: fetchPosts });