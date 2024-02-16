import { ICartEducationProps } from "@/utils/types";
import Link from "next/link";


  
export default function CartEducation( {university, profession, data, path } : ICartEducationProps) {
  return (
    <div className='font-condensed w-full h-full pb-[6px] mm:pb-3 md:pb-3  bg-color-btn-primary rounded-[10px]'>
    <div className="flex flex-col justify-between notXl:h-[80%] py-2 mm:py-[20px] xl:py-6 bg-color-btn-main text-center  rounded-[10px] border-solid border-[1px] border-color-primary border-b-none">
        <p className="text-base font-medium leading-[19.2px] mb-2 mm:mb-4 xl:mb-6 mm:text-xl mm:font-bold mm:leading-6 xl:text-2xl xl:leading-[28.8px]">{university}</p>
        <div className="not-italic flex flex-col gap-2 mm:gap-4 xl:gap-6 font-normal text-[15px] leading-[22.5px] md:text-xl md:leading-[30px] xl:text-2xl xl:leading-9">
            <p>{profession}</p>
            <p>{data}</p>
        </div>
    </div>
    <Link href={path} className="text-color-secondary transition duration-500 ease-in-out hover:text-color-accent-extra focus:text-color-accent-extra
     text-[15px] leading-[18px] font-normal mm:font-medium mm:text-lg mm:leading-[21.6px] xl:text-xl xl:leading-6 xl:font-bold underline px-3 mm:px-[22px] xl:px-2 pt-[3px] mm:pt-[30px] md:pt-4 xl:pt-[9px] flex justify-end">See more</Link>
    </div>
  )
}
