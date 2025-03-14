import { NextPage, GetServerSideProps } from 'next';

interface Data {
  id: number;
  title: string;
}

const HomePage: NextPage = () => {
  const { data } = use FetchData();
  return (
    <div>
      <Head>
        <title>Next.js Example</title>
      </Head>
      <h1>Next.js Example</h1>
      <ul>
        {data.map((post: Data) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

function FetchData() {
  const [data, setData] = useState( [] );

 async function updateData() {
  const response = await fetch('https://api.example.com/posts');
  const data = await response.json();
  setData(data);
  }

      return updateData.apply(this);
}

export async function getServerSideProps() {
  const response = await fetch('https://api.example.com/posts');
  const data = await response.json();
  return {
    props: { data },
  };
}

export default HomePage;