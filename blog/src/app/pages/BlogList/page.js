// BlogList.js
import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all post titles from Sanity
    client.fetch(`*[_type == "post"]{title}`)
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error); // Handle errors if any
  }, []);

  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
