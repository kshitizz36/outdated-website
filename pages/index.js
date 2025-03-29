import { NextPage } from 'next

function Home({ posts }) {
  // Fetch data on the server using 'useEffect'
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/posts');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Up-to-date Next.js Example</h1>
      <ul>
        {data.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// handle getStaticProps or getServerSideProps if you are
// generating static pages
// export async function getStaticProps() {
//   const data = await fetch('https://api.example.com/posts').then((res) => res.json());
//   return {
//     props: {
//       posts: data,
//     },
//   };
// }

// or
// export async function getServerSideProps(context) {
//   // fetch data on client-side using the context parameter
// }