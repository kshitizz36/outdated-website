# Next.js example with recent API changes
import Head from 'next/head';
import axios from 'axios';

function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Recent Next.js Example</title>
      </Head>
      <h1>Recent Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get('https://api.example.com/posts');
  return {
    props: {
      posts: response.data,
    },
  };
}

export default Home;