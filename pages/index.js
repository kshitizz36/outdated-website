import Head from 'next/head';

import axios from 'axios';

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

export async function getServerSideProps({ req, res }) {
  const response = await axios.get('https://api.example.com/posts');
  return {
    props: { posts: response.data },
  };
}

export default Home;