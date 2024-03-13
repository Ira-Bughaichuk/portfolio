import CartSkill from "./../../components/CartSkill/CartSkill";
import Title from "./../../components/Title/Title";
import { skillsList } from "./../../utils/Data/skillsList";



export default function Skills() {
  const techList = Object.values(skillsList)[0];
  const softList = Object.values(skillsList)[1];
  return (
    <section className="py-[40px] md:py-[50px] xl:pt-[80px] xl:pb-[170px]">
      <div className="container mx-auto">
        {/* <Title type="subTitle" title={"My skills"} /> */}
        <div className="relative">
          <Title type="subTitle" title={"Tech Skills"} />
          {/* <h3 className="font-condensed text-xl font-medium leading-6 mb-4 mm:mb-[30px] mm:leading-[38.4px] mm:text-[32px] xl:leading-[43.2px] xl:text-[36px]">Tech Skills</h3> */}
           {/* <ul className={`${s.parent_tech} mb-[20px] md:mb-[40px]`}>
            {techList &&
              techList.map(({currentClass, title}, index) => (
                <li key={index} className={currentClass}>
                  <CartSkill title={title} index={index}/>
                </li>
              ))}
          </ul> */}
          {/*  */}
          <ul className='w-full xl:w-[930px] flex flex-wrap gap-x-[29px] gap-y-2 mm:gap-x-[34px] mm:gap-y-6 md:gap-x-[61px] xl:gap-x-[30px] xl:gap-y-[30px] mb-[20px] mm:mb-[40px]'>
            {techList &&
              techList.map(({currentClass, title}, index) => (
                <li key={index} className='w-[100px] h-[100px] mm:w-[140px] mm:h-[140px] xl:w-[160px] xl:h-[160px]'>
                  <CartSkill title={title} index={index}/>
                </li>
              ))}
          </ul>
          <Title type="subTitle" title={"Soft Skills"} />
          {/* <h3 className="font-condensed text-xl font-medium leading-6 mb-4 mm:mb-[30px] mm:leading-[38.4px] mm:text-[32px] xl:leading-[43.2px] xl:text-[36px]">Soft Skills</h3> */}
          {/* <ul className={`${s.parent_soft} mb-[20px] md:mb-0`}>
            {softList &&
              softList.map(({currentClass, title}, index) => (
                <li key={index} className={currentClass}>
                  <CartSkill title={title} index={index}/>
                </li>
              ))}
          </ul> */}
          <ul className='w-full xl:w-[930px] flex flex-wrap gap-x-[29px] gap-y-2 mm:gap-x-[34px] mm:gap-y-6 md:gap-x-[61px] xl:gap-x-[30px] xl:gap-y-[30px] mb-[20px] mm:mb-[40px]'>
            {softList &&
              softList.map(({currentClass, title}, index) => (
                <li key={index} className='w-[100px] h-[100px] mm:w-[140px] mm:h-[140px] xl:w-[160px] xl:h-[160px]'>
                  <CartSkill title={title} index={index}/>
                </li>
              ))}
          </ul>
      </div>
      </div>
    </section>
  );
}