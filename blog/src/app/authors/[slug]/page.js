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
    *[_type == "author" && slug.current == '${slug}'] {
      "CurrentSlug": slug.current,
      name, 
      image,
      bio
    }[0]
  `;
  const data = await client.fetch(query);
  return data;
}

export default function AuthorPage({params}) {
  const { slug } = params || {};
  const [data, setData] = useState(null);

  useEffect(() => {
    getData(slug).then(setData);
  }, [slug]);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="flex flex-col mt-6 md:mt-20 justify-center items-start max-w-2xl mx-4 md:mx-auto mb-16">
        <div className="flex items-center">
          <img className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover shadow-md mb-4 md:mb-8" src={urlFor(data.image.asset).url()} alt={data.name} />
          <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl tracking-tight mb-2 md:mb-4 ml-2 md:ml-4 text-grey-300 dark:text-white">{data.name}</h1>
        </div>
        <div className="p-2 md:p-4 rounded-lg bg-gray-900 text-white">
          <BlockContent className="prose dark:prose-dark prose-sm md:prose-lg mt-6 md:mt-10 dark:text-gray-200 mb-10 md:mb-16" blocks={data.bio} />
        </div>
      </div>
    </>
  );
}












