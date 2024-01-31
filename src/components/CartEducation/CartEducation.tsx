import { ICartEducationProps } from "@/utils/types";
import Link from "next/link";


  
export default function CartEducation( {university, profession, data, path } : ICartEducationProps) {
  return (
    <div className='font-condensed w-full h-full pb-[6px] md:pb-3 xl:pb-4  bg-color-btn-primary rounded-[10px]  '>
        {/* py-2 pb-[6px] pt-2 mb:py-[30px] md:px-[30px] xl:py-6 bg-color-btn-main mb-[3px] md:mb-4 xl:mb-[9px] */}
    <div className="flex flex-col justify-between notXl:h-[80%]  py-2 md:py-[20px] xl:py-6 bg-color-btn-main text-center  rounded-[10px] border-solid border-[1px] border-color-primary ">
        <p className="text-base font-medium leading-[19.2px] mb-2 md:mb-4 md:text-xl md:font-bold md:leading-6 xl:text-2xl xl:leading-[28.8px]">{university}</p>
        
        <div className="not-italic flex flex-col gap-2 md:gap-4 xl:gap-6 leading-[22.5px] md:text-xl md:leading-[30px] xl:text-2xl xl:leading-9">
            <p>{profession}</p>
            <p>{data}</p>
        </div>
    </div>
    <Link href={path} className="text-color-secondary leading-[18px] md:leading-[21.6px] xl:leading-6 xl:font-bold underline px-3 md:px-[22px] xl:px-2 pt-[3px] md:pt-4 xl:pt-[9px] flex justify-end">See more</Link>
    </div>
  )
}
