



import { client } from '@/app/lib/sanity';
import React from 'react';

async function getData() {
  const query = `
  *[_type == 'post']  {
    title,mainImage,author,body,_createdAt,
      "CurrentSlug": slug.current
  } `;


  const data = await client.fetch(query)
  return data;
}


export default async function BlogPost() {
  const data = await getData();

  console.log(data)
  return (
    <div>
      Heyy
    </div>
  );
}
