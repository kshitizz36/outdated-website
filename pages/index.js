import React from 'react'; import Head from 'next/head'; import axios from 'axios';

class Home extends React.Component {
  static async getServerSideProps(context) {
    try {
      const posts = await axios.get('https://api.example.com/posts');
      return {
        props: {
          posts: posts.data,
        },
      };
    } catch (err) {
      console.error(err);
      return {
        props: {},
      };
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <Head>
          <title>Updated Next.js Example</title>
        </Head>
        <h1>Updated Next.js Example</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;
