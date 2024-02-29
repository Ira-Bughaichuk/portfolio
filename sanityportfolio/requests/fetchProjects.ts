// import { client } from '../../src/lib/client';
// const LOAD_MORE_STEP:number = 4;

// export async function fetchProjects(){
//   const query =`{
//     "projects": *[_type == 'projects'] | order(_createdAt desc){
//       projectTitle, projectLink, technologyTitle, smallDescription, titleImage,
//     }, 
//     "total": count(*[_type == 'projects'])
//   }`
//   const data = await client.fetch(query);
//   return data;
// }