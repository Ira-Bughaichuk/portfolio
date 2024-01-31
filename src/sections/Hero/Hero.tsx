import Image from "next/image";
import profileMe from "../../../public/images/hero.jpg";

export default function Hero() {
  return (
    <section className="overflow-hidden hero-gradient w-full pt-[33px] pb-[40px] md:pt-[40px] md:pb-[80px] xl:pt-[25px] xl:pb-[50px]">
      <div className="container">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 xl:gap-[27px] ">
        <div className="flex-1 md:flex-initial md:w-[352px] xl:w-[550px] relative">
          <div className='absolute md:w-[400px] md:h-[623px] xl:w-[519px] xl:h-[810px] transform -rotate-[29.029deg] bg-color-bg-secondary xl:rounded-[810px] md:rounded-[623px] filter blur-[35px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'></div>
            {/* for mobile */}
            <div className="relative block md:hidden">
            <h1 className="font-mono absolute top-1/2 -left-[90%] w-[372px] text-center transform -rotate-[90deg] text-color-secondary text-4xl not-italic font-medium leading-[43.2px]">Frontend <span className="w-full flex justify-end">Developer</span></h1>
            <div className="z-10 relative w-[260px] h-[372px] md:w-[330px] md:h-[471px] xl:w-[550px] xl:h-[786px] overflow-hidden rounded-full border-[2px] border-solid">
              <Image
                src={profileMe}
                alt="Iryna Buhaichuk"
                width={497}
                height={710}
                priority
                // sizes="(max-width: 767px) 240px, (max-width: 1279px) 300px, 496px"
                className="w-[240px] h-[343px] md:w-[300px] md:h-[428px] xl:w-[496px] xl:h-[709px] object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-full"
              />
            </div>
            </div>
             {/* for tablet and desktop */}
            <div className="hidden md:block z-10 relative w-[260px] h-[372px] md:w-[330px] md:h-[471px] xl:w-[550px] xl:h-[786px] overflow-hidden rounded-full border-[2px] border-solid">
              <Image
                src={profileMe}
                alt="Iryna Buhaichuk"
                width={497}
                height={710}
                // sizes="(max-width: 767px) 240px, (max-width: 1279px) 300px, 496px"
                className="w-[240px] h-[343px] md:w-[300px] md:h-[428px] xl:w-[496px] xl:h-[709px] object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-full"
              />
            </div>
          </div>
          
          <div className="font-mono text-color-secondary flex-1  md:flex-auto">
            <h1 className="font-mono hidden md:block mb-[70px] text-4xl not-italic font-medium leading-[43.2px] md:text-5xl md:leading-[57.6px] xl:text-8xl xl:leading-[115.2px]">Frontend <span className="w-full flex justify-end">Developer</span></h1>
            <div className="mb-[34px] md:mb-[60px] flex flex-col gap-5 md:gap-4 xl:gap-[30px] leading-[19.5px] md:leading-[20.8px] xl:leading-[26px]">
              <p className='md:w-[361px] xl:w-[535px]'>
                Welcome to my personal page, where I share my passion for web
                development and a creative approach to crafting impressive
                interfaces.
              </p>
              <div className="xl:w-full xl:flex xl:justify-end">
              <p className="md:w-[361px] xl:w-[535px]">
                My goal is to create user interfaces that leave a casual
                impression and provide an excellent interaction experience.
              </p>
              </div>
            </div>
            <button type="button" className="font-roboto px-5 py-4 w-full flex gap-4 md:w-[198px] xl:w-[281px] xl:px-[40px] xl:gap-[26px] justify-center  bg-color-btn-primary outline-none border-none rounded-[8px] text-xl font-bold leading-6 xl:text-2xl xl:leading-[28.8px]">
              DownLoad CV 
            </button>
          </div>
        </div>
        </div>
    </section>
  );
}
