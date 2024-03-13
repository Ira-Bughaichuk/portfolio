import { fetchProjects } from '../api/projects/route';
import Title from '@/components/Title/Title';
import { ProjectCart } from '@/utils/types';
import ProjectList from '@/components/ProjectList/ProjectList';


export type Data = {
  projects: ProjectCart[],
  total: number,
}

export default async function Page() {
  const data:Data = await fetchProjects();

    return (
        <main className="page">
          <section className="section">
              <div className="container mx-auto">
                  <Title type="main" title='My Projects'/>
                  <ProjectList projectList={data.projects} total={data.total}/>
              </div>
          </section>
        </main>
    )
}
