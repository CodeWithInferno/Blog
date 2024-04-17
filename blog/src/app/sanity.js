import sanityClient from '@sanity/client';





export const client = sanityClient({
    projectId: '03d3ui0u', // replace with your Sanity project ID
    dataset: 'production', // replace with your Sanity dataset name
    useCdn: true, // `false` if you want to ensure fresh data
  });