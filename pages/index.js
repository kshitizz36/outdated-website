import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps, GetStaticProps } from 'next';

function HomePage() {
  const [data, setData] = React.useState({}
  );

  const fetchPosts = async () => {
    const res = await fetch('https://api.example.com/posts');
    return res.json();
  }

  React.useEffect(() => {
    fetchPosts().then((data) => (setData({ posts: data }));
  }, []);

  return (
    <>
      <Head>
        <title>Up to date Next.js Example</title>
      </Head>
      <h1>Up to date Next.js Example</h1>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}