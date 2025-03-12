import { GetServerSideProps, GetStaticProps } from 'next';

export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/posts');
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <title>Outdated Next.js Example</title>
      <h1>Outdated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}