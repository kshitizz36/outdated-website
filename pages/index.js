import React from 'react'; import Head from 'next/head'; import axios from 'axios';

export default function Home ({ posts }) {
  return (<>
    <Head>
      <title>Next.js Example with Updated API</title>
    </Head>
    <h1>Next.js Example with Updated API</h1>
    <ul>{posts.map((post) => (<li key={post.id}>{post.title}</li>))}</ul>

  </>);
}

export async function getServerSideProps({ req, res }){
  const data = await axios.get('https://api.example.com/posts');
  return {
    props: data.data,
  };
}
