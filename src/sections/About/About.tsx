import Image from "next/image";
import Title from "./../../components/Title/Title";
import Buttons  from './../../components/Buttons/Buttons';
import about from "./../../../public/images/about.jpg";
import Email from '../../../public/icons/email.svg';
import GitHub from '../../../public/icons/github.svg';
import Linkedin from '../../../public/icons/linkedIn.svg';

export default function About() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col mm:flex-row items-center gap-6 xl:gap-[160px] mm:justify-between">
            <div className="relative flex grow-0 shrink-0 w-[235px] h-[371px] mm:w-[205px] mm:h-[344px] md:w-[235px] md:h-[371px] xl:w-[400px] xl:h-[600px] overflow-hidden rounded-full">
              <Image
                src={about}
                alt="Photo Iryna"
                loading="lazy" 
                width={400}
                height={600}
                className="object-cover w-full h-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-full"
              />
            </div>
          <div className="flex flex-col">
            <Title type="main" title={'About me'}/>
            <div className="font-condensed flex flex-col gap-5 mb-4 mm:mb-5 xl:mb-[60px]">
              <p className="text-[15] leading-[22.5px] mm:text-lg mm:leading-[27px] xl:leading-9 xl:text-2xl">
                I am an experienced front-end developer with a focus on React.js
                and its ecosystem. I have successful experience in creating both
                client and server applications.
              </p>
              <p className="text-[15] leading-[22.5px] mm:text-lg mm:leading-[27px] xl:leading-9 xl:text-2xl">
                In the past, I have served as a Scrum Master on team projects,
                so I understand that a high level of collaboration and
                interaction is essential for project success. I value learning
                opportunities and constantly strive to improve my skills.
              </p>
            </div>
            <ul className="flex flex-col mm:flex-row mm:justify-between xl:justify-start gap-2 xl:gap-[30px]">
                <li><Buttons title={'Send an e-mail'} path={"mailto:irynabugaichuk7@gmail.com"}><Email width={20} height={20} aria-label="Email" className='w-[14px] h-[14px] mm:w-[18px] mm:h-[18px]  xl:w-[20px] xl:h-[20px]'/></Buttons></li>
                <li><Buttons title={'Linkedin'} path={'https://www.linkedin.com/feed/'}><Linkedin width={20} height={20} aria-label="Linkedin" className='w-[12px] h-[12px] mm:w-[16px] mm:h-[16px] xl:w-[20px] xl:h-[20px]'/></Buttons></li>
                <li><Buttons title={'GitHub'} path={'https://github.com/Ira-Bughaichuk'}><GitHub width={20} height={20} aria-label="GitHub" className='w-[12px] h-[12px] mm:w-[16px] mm:h-[16px] xl:w-[20px] xl:h-[20px]'/></Buttons></li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
