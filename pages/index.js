import React from 'react';
import Head from 'next/head';

class Home extends React.Component {
  static async getStaticProps(context) {
    // Fetch some data on the server and cache it
    const cache = await globalThis.fetch('https://api.example.com/posts').then((res) => res.json());
    return {
      // Cache posts to avoid requests at runtime
      props: {
        posts: cache,
      },
    };
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <Head>
          <title>Cache data per page at build time using getStaticProps</title>
        </Head>
        <h1>Cache data per page at build time using getStaticProps</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Home;