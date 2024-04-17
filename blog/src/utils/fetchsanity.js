// utils/fetchsanity.js

import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '03d3ui0u', // replace with your Sanity project ID
  dataset: 'production', // replace with your Sanity dataset name
  useCdn: true, // `false` if you want to ensure fresh data
});

export async function fetchPosts() {
  return client.fetch('*[_type == "post"]{slug, title, mainImage, author->{name}, body}');
}