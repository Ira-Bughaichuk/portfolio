
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
const LOAD_MORE_STEP:number = 2;
export default async function Page() {
  const data:Data = await fetchProjects(0, LOAD_MORE_STEP);
  console.log('data', data);
  
  // const [tag, setTag] = useState("All");
  // const handleTagChange = (newTag:string)=>{
  //     setTag(newTag);
  //   }
  // const filteredProjects = projects.filter(project =>{
  //   return project.tag.includes(tag)
  // })

  
    
    return (
        <main className="page">
          <section className="section">
              <div className="container mx-auto">
                  <Title title='My Projects'/>
                  {/* <div className='flex gap-4 xl:gap-[30px] justify-end mb-4 xl:mb-[44px]'>
                    <BtnProject  onClick={handleTagChange} tag="All" isSelected={tag === "All"}/>
                    <BtnProject  onClick={handleTagChange} tag="Com" isSelected={tag === "Com"}/>
                    <BtnProject  onClick={handleTagChange} tag="Pet" isSelected={tag === "Pet"}/>
                  </div> */}
                  <ProjectList projectList={data.projects} total={data.total}/>
                  
              </div>
          </section>
        </main>
    )
}
