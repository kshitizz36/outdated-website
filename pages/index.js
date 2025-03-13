import { GetServerSideProps } from 'next';

const Home = () => {
  const { posts } = useSWR('https://api.example.com/posts', fetch);

  return (
    <div>
      <Head>
        <title>Updated Next.js Example</title>
      </Head>
      <h1>Updated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const { data } = await fetch('https://api.example.com/posts').then((res) => res.json());
  return {
    props: { posts: data },
  };
}