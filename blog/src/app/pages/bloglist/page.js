'use client';
import React, { useEffect } from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '03d3ui0u', // replace with your Sanity project ID
  dataset: 'production', // replace with your Sanity dataset name
  useCdn: true, // `false` if you want to ensure fresh data
});

const Page = () => {
  useEffect(() => {
    client
      .fetch('*[_type == "post"]{slug}')
      .then((data) => {
        data.forEach((post) => {
          console.log(post.slug.current);
        });
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Hello, Next.js!</h1>
    </div>
  );
};

export default Page;