// 'use client';
// import React, { useEffect, useState } from 'react';
// import sanityClient from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';
// import BlockContent from '@sanity/block-content-to-react';

// const client = sanityClient({
//   projectId: '03d3ui0u', // replace with your Sanity project ID
//   dataset: 'production', // replace with your Sanity dataset name
//   useCdn: true, // `false` if you want to ensure fresh data
// });

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//   return builder.image(source);
// }

// const Page = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     client
//     .fetch('*[_type == "post"]{slug, title, mainImage, author->{name}, body}')
//     .then((data) => {
//       setPosts(data);
//     })
//     .catch(console.error);
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-around">
//       {posts.map((post) => (
//         <div key={post.slug.current} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//           <img className="w-full" src={urlFor(post.mainImage).width(400).url()} alt={post.title} />
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{post.title}</div>
//             <BlockContent blocks={post.body} />
//           </div>
//           <div className="px-6 pt-4 pb-2">
//   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{post.author.name}</span>
// </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Page;









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

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "post"]{slug, title, mainImage, author->{name}, body}')
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto space-y-10 mt-8 mb-8 px-4 sm:px-6 lg:px-8">
        {posts.map((post) => (
          <div key={post.slug.current} className="relative flex flex-col sm:flex-row bg-black text-white shadow-md w-full max-w-[70rem] m-5 rounded-xl border-2 border-gray-800 transition-transform duration-500 ease-in-out transform hover:scale-105 mr-1">
            <div
              className="relative w-full sm:w-2/5 m-0 overflow-hidden text-white bg-black rounded-r-none bg-clip-border rounded-xl shrink-0"
            >
              <img
                src={urlFor(post.mainImage).width(400).url()}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h6
                className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white uppercase"
              >
                {post.category}
              </h6>
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                {post.title}
              </h4>
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-white">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug.current}`} passHref>
                <div>
                  <a className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-white/10 active:bg-white/20">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                    </svg>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;