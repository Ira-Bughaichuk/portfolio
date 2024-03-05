'use client';
import Image from "next/image";
import profileMe from "../../../public/images/hero.jpg";
import Arrow from '../../../public/icons/arrow.svg';
import BtnPrimary from "@/components/BtnPrimary/BtnPrimary";

export default function Hero() {
  const handleClick =()=>{
    console.log('download'); 
  }
  return (
    <section className="overflow-hidden hero-gradient w-full pt-[33px] pb-[40px] mm:pt-[40px] mm:pb-[80px] xl:pt-[25px] xl:pb-[50px]">
      <div className="container">
        <div className="flex flex-col mm:flex-row-reverse items-center gap-6 xl:gap-[27px] ">
        <div className="flex-1 mm:flex-initial mm:w-[352px] xl:w-[550px] relative">
          <div className='absolute mm:w-[400px] mm:h-[623px] xl:w-[519px] xl:h-[810px] transform -rotate-[29.029deg] bg-color-bg-secondary xl:rounded-[810px] mm:rounded-[623px] filter blur-[35px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'></div>
            {/* for mobile */}
            <div className="block relative mm:hidden">
            <h1 className="font-mono absolute top-1/2  w-[302px] -left-[95%] text-center transform -rotate-[90deg] text-color-secondary text-4xl not-italic font-medium leading-[43.2px]">Frontend <span className="w-full flex justify-end">Developer</span></h1>
              <div className="z-10 relative w-[210px] h-[332px] mm:w-[330px] mm:h-[471px] xl:w-[550px] xl:h-[786px] overflow-hidden rounded-full border-[2px] border-solid">
                <Image
                  src={profileMe}
                  alt="Iryna Buhaichuk"
                  width={497}
                  height={710}
                  priority
                  className="w-[240px] h-[343px] mm:w-[300px] mm:h-[428px] xl:w-[496px] xl:h-[709px] object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-full"
                />
              </div>
            </div>

             {/* for tablet and desktop */}
            <div className="hidden mm:block z-10 relative w-[260px] h-[372px] mm:w-[330px] mm:h-[471px] xl:w-[550px] xl:h-[786px] overflow-hidden rounded-full border-[2px] border-solid">
              <Image
                src={profileMe}
                alt="Iryna Buhaichuk"
                width={497}
                height={710}
                priority
                className="w-[240px] h-[343px] mm:w-[300px] mm:h-[428px] xl:w-[496px] xl:h-[709px] object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-full"
              />
            </div>
          </div>
          
          <div className="font-mono text-color-secondary flex-1  mm:flex-auto">
            <h1 className="font-mono hidden mm:block mb-[70px] text-4xl not-italic font-medium leading-[43.2px] mm:text-5xl mm:leading-[57.6px] xl:text-8xl xl:leading-[115.2px]">Frontend <span className="w-full flex justify-end">Developer</span></h1>
            <div className="mb-[34px] mm:mb-[60px] flex flex-col gap-5 mm:gap-4 xl:gap-[30px] text-[15px] leading-[19.5px] mm:text-[16px] mm:leading-[20.8px]xl:text-xl xl:leading-[26px]">
              <p className='mm:w-[320px] md:w-[361px] xl:w-[535px]'>
                Welcome to my personal page, where I share my passion for web
                development and a creative approach to crafting impressive
                interfaces.
              </p>
              <div className="xl:w-full xl:flex xl:justify-end">
              <p className="mm:w-[320px] md:w-[361px] xl:w-[535px]">
                My goal is to create user interfaces that leave a casual
                impression and provide an excellent interaction experience.
              </p>
              </div>
            </div>
            <BtnPrimary title={'DownLoad CV'} typeBtn={"button"} onClick={handleClick}><Arrow width={24} height={24} className='w-4 h-4 xl:w-6 xl:h-6'/></BtnPrimary>
          </div>
        </div>
        </div>
    </section>
  );
}

