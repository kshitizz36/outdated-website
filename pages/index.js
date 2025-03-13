import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function Home() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.example.com/posts');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Outdated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => router.push('/posts/' + post.id)}>View post</button>
    </div>
  );
};

export default Home;