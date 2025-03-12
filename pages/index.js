import { GetServerSideProps } from 'next';

export async function getServerSideProps(context) {
  const response = await fetch('https://api.example.com/posts');
  const data = await response.json();

  return {
    props: { posts: data }
  };
}

function Home({ posts }) {
  return (
    <div>
      <h1>Updated Next.js Example</h1>
      <ul>
        {[posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))]}
      </ul>
    </div>
  );
}

export default Home