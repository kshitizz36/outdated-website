import dynamic from 'next/dynamic'

const Home = () => {
  // Load the component on demand
  const Hero = dynamic(() => import('@components/Hero').then(module => module.Hero)),

  async getServerSideProps() {
    // Use getServerSideProps for SSR
    const res = await fetch('https://api.example.com/posts')
    const data = await res.json()

    return {
      props: { posts: data } }
  },

  render() {
    const { posts } = this.props
    return <div>
      <Head>
        <title>Up-to-date Next.js Example</title>
      </Head>
      <h1>Up-to-date Next.js Example</h1>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li> )}
      </ul>
    </div>
  }
}

Home.getServerSideProps = getServerSideProps

export default Home;