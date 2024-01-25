import Image from "next/image";
import Title from "./../../components/Title/Title";
import about from "./../../../public/images/about.jpg";
export default function About() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 xl:gap-[160px] md:justify-between">
          <div className="flex-1 md:flex-initial w-[235px] h-[371px] xl:w-[400px] xl:h-[600px]">
            <div className="relative w-[235px] h-[371px] xl:w-[400px] xl:h-[600px] overflow-hidden rounded-full">
              <Image
                src={about}
                alt="Photo Irina"
                width={400}
                height={600}
                className="object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-full"
              />
            </div>
          </div>
          {/* md:w-[494px] xl:w-[760px] */}
          <div className="flex flex-col">
            <Title />
            <div className="flex flex-col gap-5 mb-4 md:mb-5 xl:mb-[60px]">
              <p className="text-[15] leading-[22.5px] md:text-lg md:leading-[27px] xl:leading-9 xl:text-2xl">
                I am an experienced front-end developer with a focus on React.js
                and its ecosystem. I have successful experience in creating both
                client and server applications.
              </p>
              <p className="text-[15] leading-[22.5px] md:text-lg md:leading-[27px] xl:leading-9 xl:text-2xl">
                In the past, I have served as a Scrum Master on team projects,
                so I understand that a high level of collaboration and
                interaction is essential for project success. I value learning
                opportunities and constantly strive to improve my skills.
              </p>
              <ul className="flex flex-col md:flex-row gap-2 md:gap-[30px]">
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
