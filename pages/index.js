import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';

export async function getServerSideProps(context) {
    const res = await fetch('https://api.example.com/posts');
    const data = await res.json();
    return {
        props: {
            posts: data,
        },
    };
}

function Home({ posts }) {
    return (
        <div>
            <Head>
                <title>Up-to-Date Next.js Example</title>
            </Head>
            <h1>Up-to-Date Next.js Example</h1>
            <ul>
                {posts.map((post) => (<li key={post.id}>{post.title}</li>))}
            </ul>
        </div>
    );
}

export default Home;