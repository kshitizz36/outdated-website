import { NextPage } from 'next'; import Head from 'next/head';

const Home: NextPage = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    // Your JSX here...
  );
}