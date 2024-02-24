
import { client } from "@/lib/client";
import type { GetServerSideProps } from 'next';

///====v-1=====
// export async function getData(start:any, end:any){
//   const query =`{
//     "projects": *[_type == 'projects'] | order(_createdAt desc) [${start}...${end}]{
//       projectTitle, technologyTitle, smallDescription,  titleImage,
//     }, 
//     "total": count(*[_type == 'projects'])
//   }`
//   const data = await client.fetch(query);
//   return data;
// }
///====v-1=====


///====v-2=====
export type Data = {
  projects: any,
  total: number
}
 
const LOAD_MORE_STEP:number = 4;
export async function loadProjects(start:number, end:number){
     const query =`{
    "projects": *[_type == 'projects'] | order(_createdAt desc) [${start}...${end}]{
      projectTitle, technologyTitle, smallDescription,  titleImage,
    }, 
    "total": count(*[_type == 'projects'])
  }`
    const {projects, total} = await client.fetch(query);
    console.log('server', {projects, total});
    return {projects, total};
};

export const getServerSideProps: GetServerSideProps<{ projects: any, total: any }> = async () => {
  const data = await loadProjects(0, LOAD_MORE_STEP);
  const { projects, total } = data;

  console.log("{projects, total}", data);

  return {
    props: {
      projects,
      total
    }
  };
};


// export const getServerSideProps: GetServerSideProps<{ data: Data }> = async () => {
//   const data = await loadProjects(0, LOAD_MORE_STEP);
//   console.log("{ projects, total }", data);
//   return { props: { data } };
// };


//-----------------------------------------------------------------
// const query =`{
//   "projects": *[_type == 'projects'], 
//   "total": count(*[_type == 'projects'])
// }`

// {projects, total}
//   const query =`
//     [_type == 'projects'] | order(_createdAt desc){
//       projectTitle,
//       technologyTitle,
//       smallDescription, 
//       titleImage,
//     }`;
//     const data = await client.fetch(query);
//     return data;