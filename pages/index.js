import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

type Data = {
  id: number;
  title: string;
};

const Home = () => {
  const { posts } = useSWR<unknown, Data>('https://api.example.com/posts', fetch);

  return (
    <div>
      <Head>
        <title>Outdated Next.js Example</title>
      </Head>
      <h1>Outdated Next.js Example</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

type HomeProps = {}

const getServerSideProps: GetServerSideProps<{ posts: Data[] }> = async (context) => {
  const data = await fetch('https://api.example.com/posts').then((res) => res.json());

  return {
    props: { posts: data },
  };
}

export default Home;
export { HomeProps, getServerSideProps };
