
import Title from '@/components/Title/Title';
import  BtnProject  from '@/components/BtnProject/BtnProject';
import CartProjects from '@/components/CartProjects/CartProjects';


import { ProjectCart } from '@/utils/types';
import { fetchProjects } from '../api/projects/route';
import ProjectList from '@/components/ProjectList/ProjectList';


export type Data = {
  projects: ProjectCart[],
  total: number
}
const LOAD_MORE_STEP:number = 6;
export default async function Page() {
  const data:Data = await fetchProjects(0, LOAD_MORE_STEP);
  console.log('data', data); 
    
    return (
        <main className="page">
          <section className="section">
              <div className="container mx-auto">
                  <Title title='My Projects'/>
                  <ProjectList projectList={data.projects} total={data.total}/>
              </div>
          </section>
        </main>
    )
}
