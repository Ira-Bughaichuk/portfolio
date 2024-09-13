import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// import {createClient} from '@sanity/client';

export const client = createClient({ 
    projectId:'smviqyd2',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-02-22',
})

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}



