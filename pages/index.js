import { GetServerSideProps, GetStaticProps } from 'next';

custom pages/index.js
export const getServerSideProps = async () => {
  // Fetch some data on the server
  const res = await fetch('https://api.example.com/posts');
  const data = await res.json();
  return {	status: 200,	headers: {},	props: { posts: data }	}
};

export default function Home({ posts }) {
  const { posts } = { props }
  return (
    <div>
      <h1>Updated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}