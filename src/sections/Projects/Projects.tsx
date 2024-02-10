import Title from './../../components/Title/Title';
import BtnToPage from './../../components/BtnToPage/BtnToPage';



export default function Projects() {
 

  
  return (
    <section className="section">
        <div className="container mx-auto">
            <Title title='My Projects'/>
            <div>
              <div className='flex flex-col font-condensed'>
                <p  className='mb-6 text-xl leading-6 font-medium xl:text-4xl xl:leading-[43.2px]'>Browse Through My Works</p>
                <p className='mm:mb-10 text-[15px] leading-[22.5px] mm:text-[18px] mm:leading-[27px] xl:text-2xl xl:leading-9 font-normal'>Dive into my portfolio to explore a collection of projects showcasing meticulous implementation and thoughtful design.</p>
                <div className='hidden mm:block'>
                  <BtnToPage path={'/projects'} title={"All projects"} icon={'/*/'}/>
                </div>
              </div>
              <div></div>
            </div>
        </div>
    </section>

  )
}

/* <div className='flex gap-4 xl:gap-[30px] justify-end mb-4 xl:mb-[44px]'>
              <BtnProject  onClick={handleTagChange} tag="All" isSelected={tag === "All"}/>
              <BtnProject  onClick={handleTagChange} tag="Com" isSelected={tag === "Com"}/>
              <BtnProject  onClick={handleTagChange} tag="Pet" isSelected={tag === "Pet"}/>
            </div>
            <ul className='grid gap-[35px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[30px]'>
              {filteredProjects && filteredProjects.map((item,index) =>(
                <li key={index}><CartProjects item={item}/></li>
              ))}
            </ul>  */