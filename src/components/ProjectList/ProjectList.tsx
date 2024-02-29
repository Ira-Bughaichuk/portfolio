'use client';
import { useState } from 'react';
import { ProjectCart } from "@/utils/types";
import CartProjects from "../CartProjects/CartProjects";

export type IProjectListProps = {
  projectList: ProjectCart[],
    total: number
}

const LOAD_MORE_STEP:number = 2;
export default function ProjectList({projectList, total}:IProjectListProps) {
    const [projects, setProjects] = useState<ProjectCart[]>(projectList);
    const [loadedAmount, setLoadedAmount] = useState<number>(LOAD_MORE_STEP);
    const [loading, setLoading] = useState<boolean>(false);

    const isLoadButton = total > loadedAmount;
    const getMoreProjects = async ()=>{
      setLoading(true);
      try{
        const data = await fetch(`api/projects/route/projects?start=${loadedAmount}&end=${loadedAmount+LOAD_MORE_STEP}`).then(res =>res.json())
        console.log('ProjectList', data);
        
        setLoadedAmount(loadedAmount+LOAD_MORE_STEP);
        setProjects([...projects,data.projects]);
        setLoading(false);
      }catch(error){
        console.log(error);
        setLoading(false);
        
      }
    }
    // const getMoreProjects = async () => {
    //   setLoading(true);
    //   try {
    //     const response = await fetch(`api/projects/route/projects?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`);
    //     const data = await response.json();
    //     console.log('ProjectList', data);
    
    //     setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
    //     setProjects([...projects, ...data.projects]);
    //     setLoading(false);
    //   } catch (error) {
    //     console.log(error);
    //     setLoading(false);
    //   }
    // }
  return (
    <>
    <ul className='grid gap-[35px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[30px]'>
    {/* {filteredProjects && filteredProjects.map((item,index) =>(
      <li key={index}><CartProjects item={item}/></li>
    ))} */}
    {projects && projects.map((item,index) =>(
      <li key={index}><CartProjects item={item}/></li>
    ))}
  </ul> 
  {isLoadButton && <button type='button' disabled={loading} onClick={getMoreProjects}>load more</button>}
  </>
  )
}
