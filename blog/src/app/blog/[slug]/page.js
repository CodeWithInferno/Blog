// import { client } from '../../sanity';
// async function getData(slug) {
//     const query = `
//     *[_type == "post" && slug.current == '${slug}'] {
//         "CurrentSlug": slug.current,
//         title, 
//         mainImage, 
//         "authorName": author->name, 
//         body
//       }[0]
//       `;
//       const data = await client.fetch(query);
//       return data;
// }


// export default async function BlogArticle({params}) {
//     const { slug } = params || {}; // Destructure 'slug' from 'params' or assign an empty object if 'params' is undefined
//     const data = await getData(slug)
//     console.log(data);
//     return (
//         <h1>{slug}</h1>
//     );
// }

'use client';




import { client } from '../../sanity';
import { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import Header from '../../components/Header';

// Set up the image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

async function getData(slug) {
    const query = `
      *[_type == "post" && slug.current == '${slug}'] {
        "CurrentSlug": slug.current,
        title, 
        mainImage, 
        "authorName": author->name, 
        "authorImage": author->image,
        category,
        body[]{
          ...,
          asset->{
            _id,
            url
          }
        }
      }[0]
    `;
    const data = await client.fetch(query);
    return data;
  }
  
export default function BlogArticle({params}) {
    const { slug } = params || {};
    const [data, setData] = useState(null);
  
    useEffect(() => {
      getData(slug).then(setData);
    }, [slug]);
  
    if (!data) return <div>Loading...</div>;
  
    return (
<>
    <Header />
    <div className="flex flex-col mt-20 justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-5xl md:text-7xl tracking-tight mb-4 text-grey-300 dark:text-white">{data.title}</h1>
        <p className="text-xl text-gray-500 mb-4">{data.category}</p>
        <img className="w-full h-64 object-cover rounded-lg shadow-md mb-8" src={urlFor(data.mainImage.asset).url()} alt={data.title} />
        <div className="flex items-center">
          <img className="w-20 h-20 rounded-full mr-4" src={urlFor(data.authorImage.asset).url()} alt={data.authorName} />
          <p className="text-gray-600 dark:text-gray-400 mb-4">By {data.authorName}</p>
        </div>
        <BlockContent className="prose dark:prose-dark prose-lg mt-10 dark:text-gray-200 mb-16" blocks={data.body} />
    </div>
</>
    );
}