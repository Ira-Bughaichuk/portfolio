'use client'
import { useState } from 'react';
import Title from '@/components/Title/Title';
import  BtnProject  from '@/components/BtnProject/BtnProject';
import CartProjects from '@/components/CartProjects/CartProjects';
import { projectsList } from '@/utils/Data/projectsList';
// import { getData } from '../api/projects/route';
import { ProjectCart } from '@/utils/types';

// import { loadProjects } from '../api/projects/route';

///====v-1=====
// export default async function Page() {
//   const data:Data = await getData(0,1);
export type Data = {
  projects: ProjectCart[],
  total: number
}
///====v-1=====

///====v-2=====
 export default function Page({ projects, total }: { projects: any, total: any }){
  // const data: projectCart[] = await getData();
  // console.log(initialProjects);
  console.log("client repo", projects, total);
  
    const [tag, setTag] = useState("All");
    const handleTagChange =(newTag:string)=>{
      setTag(newTag)
    }
    const filteredProjects = projectsList.filter(project =>{
      return project.tag.includes(tag)
    })
  
    
    return (
        <main className="page">
          <section className="section">
              <div className="container mx-auto">
                  <Title title='My Projects'/>
                  <div className='flex gap-4 xl:gap-[30px] justify-end mb-4 xl:mb-[44px]'>
                    <BtnProject  onClick={handleTagChange} tag="All" isSelected={tag === "All"}/>
                    <BtnProject  onClick={handleTagChange} tag="Com" isSelected={tag === "Com"}/>
                    <BtnProject  onClick={handleTagChange} tag="Pet" isSelected={tag === "Pet"}/>
                  </div>
                  <ul className='grid gap-[35px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[30px]'>
                    {/* {filteredProjects && filteredProjects.map((item,index) =>(
                      <li key={index}><CartProjects item={item}/></li>
                    ))} */}
                    {/* {initialProjects && initialProjects.map((item,index) =>(
                      <li key={index}><CartProjects item={item}/></li>
                    ))}*/}
                  </ul> 
              </div>
          </section>
        </main>
    )
}

// export const getServerSideProps = async() => {
//   const {projects, total} = loadProjects(0, LOAD_MORE_STEP)
//  return{
//   props:{
//     initialProjects:projects,
//     total
//   }
//  }
// }
