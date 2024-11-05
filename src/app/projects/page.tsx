
import { fetchProjects } from '../../../sanityportfolio/requests/fetchProjects';
import Title from '@/components/Title/Title';
import ProjectList from '@/components/ProjectList/ProjectList';

import { Data } from '@/utils/types';

export default async function Page() {
  const data:Data = await fetchProjects();

    return (
        <main className="page">
          <section className="section">
              <div className="container mx-auto">
                  <Title type="main" title='My Projects'/>
                  <ProjectList projectList={data.projects}/>
              </div>
          </section>
        </main>
    )
};
