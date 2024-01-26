import Image from "next/image";
import CartSkill from "./../../components/CartSkill/CartSkill";
import Title from "./../../components/Title/Title";
import { skillsList } from "./../../utils/Data/skillsList";
import togetherPhoto from '../../../public/images/skills-lets-work.jpg';
import letsworkPhoto from '../../../public/images/lets-work.png';

export default function Skills() {
  const techList = Object.values(skillsList)[0];
  const softList = Object.values(skillsList)[1];
  return (
    <section className="section">
      <div className="container mx-auto">
        <Title title={"My skills"} />
        <div className="relative">
        <div className="  w-full md:w-[550px] xl:w-[1320px] mb-5 md:mb-0">
          <h3 className="text-xl font-medium leading-6 mb-4 md:mb-[30px] md:leading-[38.4px] md:text-[32px] xl:leading-[43.2px] xl:text-[36px]">Tech Skills</h3>
          <ul className="grid grid-cols-6 grid-rows-2 gap-x-[15px] gap-y-[15px]  mb-4 md:mb-[30px]">
            {techList &&
              techList.map((item, index) => (
                <li key={index}>
                  <CartSkill title={item} index={index}/>
                </li>
              ))}
          </ul>
          <h3 className="text-xl font-medium leading-6 mb-4 md:mb-[30px] md:leading-[38.4px] md:text-[32px] xl:leading-[43.2px] xl:text-[36px]">Soft Skills</h3>
          <ul className="flex flex-wrap gap-[29px] md:gap-[30px]">
            {softList &&
              softList.map((item, index) => (
                <li key={index}>
                  <CartSkill title={item} index={index}/>
                </li>
              ))}
          </ul>
          <div className="hidden md:block absolute md:bottom-[35%] md:right-0 xl:-bottom-[90px] xl:right-0">
          <Image src={letsworkPhoto} alt="Let`s work together" width={633} height={454} 
          className="object-cover w-[358px] h-[249px] md:w-[368px] md:after:h-[257px] xl:w-[632px] xl:h-[453px]"
          // sizes="(max-width: 833px) 368px, (max-width: 1444px) 632px, 632px"  
          />
          </div>
        </div>
        <Image src={togetherPhoto} alt="Let`s work together" width={633} height={454} className="block md:hidden object-cover w-[358px] h-[249px] md:w-[368px] md:after:h-[257px] xl:w-[632px] xl:h-[453px]"  />
      </div>
      </div>
    </section>
  );
}
