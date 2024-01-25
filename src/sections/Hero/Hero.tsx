import Image from "next/image";
import profileMe from "../../../public/images/hero.jpg";

export default function Hero() {
  return (
    <section className="pt-[33px] pb-[40px] md:pt-[40px] md:pb-[80px] xl:pt-[25px] xl:pb-[50px] hero-gradient ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-[27px]">
          <div className="col-span-1">
            <h1>Frontend Developer</h1>
            <div>
              <p>
                Welcome to my personal page, where I share my passion for web
                development and a creative approach to crafting impressive
                interfaces.
              </p>
              <p>
                My goal is to create user interfaces that leave a casual
                impression and provide an excellent interaction experience.
              </p>
            </div>
            <button type="button">
              DownLoad CV <Image src="" alt="" />
            </button>
          </div>

          <div className="col-span-1">
            <div className="relative w-[260px] h-[372px] mb:w-[330px] mb:h-[471px] xl:w-[550px] xl:h-[786px] overflow-hidden rounded-full border-[2px] border-solid">
              <Image
                src={profileMe}
                alt="Iryna Buhaichuk"
                width={497}
                height={710}
                sizes="(max-width: 767px) 240px, (max-width: 1279px) 300px, 496px"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-hidden object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
