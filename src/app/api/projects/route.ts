'use server';
import { client } from '@/lib/client';

export async function fetchProjects(start:number, end:number){
  const query =`{
    "projects": *[_type == 'projects'] | order(_createdAt desc) [${start}...${end}]{
      _id, projectTitle, mainTechnology, projectLink, technologyTitle, smallDescription,
      "category":category->name, 
      "titleImage":titleImage.asset -> url,
      tag
    }, 
    "total": count(*[_type == 'projects'])
  }`
  const data = await client.fetch(query);
  return data;
}

// export default function projects(req:any, res:any){
// const data:any = req.query;
// if(isNaN(Number(start)) || isNaN(Number(end))){
//   return res.status(400).json({
//     error: 'Data invalid'
//   })
// }
//  const data = await fetchProjects(start, end);
//   res.status(200).json(data);

// }


// export async function fetchCategory(category:string){
//   const query =`{
//     [_type == 'projects' && category->name =="${category}"] {
//       _id,tag, projectTitle, mainTechnology, projectLink, technologyTitle, smallDescription,
//       "category":category->name, 
//       "titleImage":titleImage.asset -> url,
//     }, 
    
//   }`
//   const data = await client.fetch(query);
//   return data;
// }

// export default async function projects(req:any, res:any){
//   try {
    
//     const { start, end } = req.query;
//     if(isNaN(Number(start)) || isNaN(Number(end))){
//       return res.status(400).json({
//         error: 'Data invalid'
//       });
//     }
//     const data = await fetchProjects(Number(start), Number(end));
//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }