import { url } from "inspector";
import Image from "next/image";
import phonebook from '../../../public/images/phonebook.jpg';
import Buttons from "../Button/Buttons";

export type ICartProjectsProps = {
  item:{
    id:number;
    title: string;
        subTitle: string;
        description: string;
        image: string;
        pathToGitHub: string;
        pathToLivePage: string;
        tag: string[];
  }
}


export default function CartProjects({item}:ICartProjectsProps) {
  const {id, title, subTitle,description, image, pathToGitHub, pathToLivePage, tag} = item;
  return (
    <div className="hover:bg-gradient-to-r from-[#e9a16b] from-[4.61%] via-[rgba(254, 226, 205, 0.6)] via-[48.56%] to-[rgba(254, 255, 193, 0.4)] to-[88.73%]
     flex flex-col gap-4 items-center xl:gap-[30px] px-4 py-4 xl:px-[40px] xl:py-[40px] rounded-[10px] overflow-hidden border-[1px] border-solid border-color-btn-extra">
        {/* <Image src={phonebook} alt='Phonebook' width={500} height={400}
        className="object-contain w-[300px] h-[180px] xl:w-[500px] xl:h-[400px] rounded-[10px] overflow-hidden" /> */}
        <div style={{background: `url(${phonebook})`, backgroundSize: 'cover'}} className="w-[300px] h-[180px] xl:w-[500px] xl:h-[400px] rounded-[10px] overflow-hidden"></div>
        <div className="flex flex-col gap-2 xl:gap-4">
          <h2 className="font-roboto text-xl font-bold leading-6 xl:leading-[28.8px]">{title}</h2>
          <p className="font-condensed text-color-accent-primary text-base font-medium leading-[19.2px] xl:text-xl xl:font-normal xl:leading-6">{subTitle}</p>
          {/* <div className="text-[14px] leading-[21px] xl:text-2xl xl:leading-[31.2px]">This is a simple phone book that utilizes the Swagger backend API. It allows users to register and log in, add, delete, and filter contacts, as well as log out. Role: Developer.</div> */}
          <div className="flex justify-center gap-2 xl:gap-4 xl:justify-end">
              <Buttons title={'GitHub'} icon={'ic'} path={'/'} />
              <Buttons title={'See more'} icon={'ic'} path={'/'}/>
          </div>
        </div>
    </div>
  )
}
