import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
// import {createClient} from '@sanity/client';
// token: process.env.NEXT_PUBLIC_SANITY_TOKEN,

export const clientConfig ={
    projectId:'smviqyd2',
    dataset: 'production', 
}
export const client = createClient({ 
    projectId:clientConfig.projectId,
    dataset: clientConfig.dataset,
    useCdn: true,
    apiVersion: '2024-02-22',
    // ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client);

export function urlFor(source:any) {
  return builder.image(source);
}


