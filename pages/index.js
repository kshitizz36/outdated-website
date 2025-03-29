import { GetServerSideProps, GetStaticProps } from 'next'

interface Post {
  id: number
  title: string
}

const HomePage = () => {
  const fetchPosts = async () => {
    const res = await fetch('https://api.example.com/posts');
    const data = await res.json();

    return data;
  }

  const { posts } = fetchPosts();

  return (
    <main>
      <h1>Outdated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  const posts = await fetch('https://api.example.com/posts').then((res) => res.json());

  return {
    props: {
      posts,
    },
  };
}

export default HomePage;