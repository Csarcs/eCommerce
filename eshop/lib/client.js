import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({

    projectId:'on9o6aof',
    dataset: 'production',
    apiVersion: '1',
    useCdn: true,
    token: process.env.ESHOP_PUBLIC_SANITY_TOKEN

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

