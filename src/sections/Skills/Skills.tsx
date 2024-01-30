import Image from "next/image";
import CartSkill from "./../../components/CartSkill/CartSkill";
import Title from "./../../components/Title/Title";
import { skillsList } from "./../../utils/Data/skillsList";
import letsworkPhoto from '../../../public/images/lets-work.png';
import s from './skills.module.css';


export default function Skills() {
  const techList = Object.values(skillsList)[0];
  const softList = Object.values(skillsList)[1];
  return (
    <section className="py-[40px] md:py-[50px] xl:pt-[80px] xl:pb-[170px]">
      <div className="container mx-auto">
        <Title title={"My skills"} />
        <div className="relative">
          <h3 className="text-xl font-medium leading-6 mb-4 md:mb-[30px] md:leading-[38.4px] md:text-[32px] xl:leading-[43.2px] xl:text-[36px]">Tech Skills</h3>
           <ul className={`${s.parent_tech} mb-[20px] md:mb-[40px]`}>
            {techList &&
              techList.map(({currentClass, title}, index) => (
                <li key={index} className={currentClass}>
                  <CartSkill title={title} index={index}/>
                </li>
              ))}
          </ul>
          <h3 className="text-xl font-medium leading-6 mb-4 md:mb-[30px] md:leading-[38.4px] md:text-[32px] xl:leading-[43.2px] xl:text-[36px]">Soft Skills</h3>
          <ul className={`${s.parent_soft} mb-[20px] md:mb-0`}>
            {softList &&
              softList.map(({currentClass, title}, index) => (
                <li key={index} className={currentClass}>
                  <CartSkill title={title} index={index}/>
                </li>
              ))}
          </ul>
          <div className="block md:w-[368px] md:h-[274px] xl:w-[633px] xl:h-[454px] md:absolute md:right-0 md:bottom-[20%] xl:-bottom-[90px]">
              <Image src={letsworkPhoto} alt="Let`s work together" width={633} height={454} 
                className="object-cover" 
              /> 
            </div>
      </div>
      </div>
    </section>
  );
}