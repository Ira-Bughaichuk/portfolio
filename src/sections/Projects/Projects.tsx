import Title from './../../components/Title/Title';
import CartProjects from './../../components/CartProjects/CartProjects';

export default function Projects() {
  return (
    <section className="section">
        <div className="container mx-auto">
            <Title title='My Projects'/>
            <ul className='grid gap-[35px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[30px]'>
              <li><CartProjects /></li>
              <li><CartProjects /></li>
              <li><CartProjects /></li>
              <li><CartProjects /></li>
            </ul>
        </div>
    </section>

  )
}
