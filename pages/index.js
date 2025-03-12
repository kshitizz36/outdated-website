import { GetServerSideProps } from 'next'

class Home extends React.Component {
  static async getServerSideProps(context) {
    const res = await fetch('https://api.example.com/posts');
    const data = await res.json();
    return {
      props: {
        posts: data,
      },
    };

  }

  render() {
    return (
      <> 