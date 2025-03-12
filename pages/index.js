import { GetServerSideProps, GetStaticProps } from 'next'; 
import Head from 'next/head'; 
import axios from 'axios'; 

function Home({ posts }) { 
  return ( 
    <div> 
      <Head> 
        <title>Get Posts Example</title> 
      </Head> 
      <h1>Get Posts Example</h1> 
      <ul> 
        {posts.map((post) => ( 
          <li key={post.id}>{post.title}</li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 

export const getServerSideProps = async (context) => { 
  const response = await axios.get('https://api.example.com/posts'); 
  const data = response.data; 
  return { props: { posts: data } }; 
} 

export default Home;

// Explanation 
// getInitialProps is replaced with getServerSideProps for server-side rendering or getStaticProps for static site generation. 
// Axios is used instead of fetch to improve cross-browser compatibility and more promise-based API semantics.