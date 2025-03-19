import { ServerSidePropsContext } from 'next';
import { useState, useEffect } from 'react';

function Home({ posts }) {
 const [data, setData] = useState([]);

 useEffect(() => {
     const fetchData = async () => {
         try {
             const response = await fetch('https://api.example.com/posts')
             const result = await response.json()
             setData(result)
         }
         catch (error) {
             console.error(error)
         }
     }
     fetchData()
 }, [])

 return (
<div>
    <h1-pagination-enabled></h1>
    <ul><li key={post.id}>{post.title}</li></ul></li>
  </ul>
</div>

