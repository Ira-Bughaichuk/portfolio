'use server';
import { client } from '@/lib/client';

export async function fetchProjects(){
  const query =`{
    "projects": *[_type == 'projects'] | order(_createdAt desc) {
      _id, projectTitle, mainTechnology, projectLink, technologyTitle, smallDescription,
      "category":category->name, 
      "titleImage":titleImage.asset -> url,
      tag, gitURL, projectURL
    }, 
    "total": count(*[_type == 'projects'])
  }`
  const data = await client.fetch(query);
  return data;
}


