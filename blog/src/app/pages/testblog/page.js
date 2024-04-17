// pages/blog/[slug].js
'use client';
import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import Header from '../../components/Header';
import Link from 'next/link';

const client = sanityClient({
  projectId: '03d3ui0u', // replace with your Sanity project ID
  dataset: 'production', // replace with your Sanity dataset name
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Post = ({ slug }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("Slug:", slug); // Log the slug value for debugging
    if (slug) {
      client
        .fetch('*[_type == "post" && slug.current == $slug]', { slug })
        .then((data) => {
          console.log("Fetched data:", data); // Log the fetched data for debugging
          if (data && data.length > 0) {
            setPost(data[0]);
          } else {
            setPost(null);
          }
        })
        .catch(console.error);
    }
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto space-y-10 mt-8 mb-8">
        <div className="relative flex bg-black text-white shadow-md w-full max-w-[70rem] flex-row m-5 rounded-xl border-2 border-gray-800 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <div
            className="relative w-2/5 m-0 overflow-hidden text-white bg-black rounded-r-none bg-clip-border rounded-xl shrink-0"
          >
            <img
              src={urlFor(post.mainImage).width(400).url()}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
              {post.title}
            </h4>
            <BlockContent blocks={post.body} />
            <Link href="/blog" passHref>
              <a className="block mt-4 text-blue-500 hover:underline">Back to all posts</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
