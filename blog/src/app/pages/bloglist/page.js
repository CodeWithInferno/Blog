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
    <div className="max-w-screen-xl mx-auto">
      {posts.map((post) => (
        <div key={post.slug.current} className="border-2 border-gray-200 p-4 m-4 flex flex-col md:flex-row h-[200px] w-full">
          <img className="w-full md:w-1/3 object-cover rounded" src={urlFor(post.mainImage).width(400).url()} alt={post.title} />
          <div className="mt-4 md:mt-0 md:ml-6">
            <div className="font-bold text-xl mb-2">{post.title}</div>
            <div className="text-sm mb-2 text-gray-600">By {post.author.name}</div>
            <div className="line-clamp-2 overflow-ellipsis overflow-hidden">
              <BlockContent blocks={post.body} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);
};

export default Page;