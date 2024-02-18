
import Socials from '@/components/Socials/Socials';
import Title  from '@/components/Title/Title';
import Image from 'next/image';
import FormContact from '../../components/FormContact/FormContact';
import ContactsInfo from './../../components/ContactsInfo/ContactsInfo';
import letsworkPhoto from './../../../public/images/lets-work.png';

export default function Page() {
  return (
     <main className="page">
    <section className="section">
          <div className="container mx-auto">

              <Title title='Place Your Order'/>
              <div className="flex flex-col gap-3 xl:gap-6 mb-5 mm:mb-[30px] xl:mb-[40px]">
                <h3 className="text-xl font-medium leading-6 mm:font-bold xl:text-4xl xl:font-medium xl:leading-[43.2px]">Tell me about your project</h3>
                <p className="text-[15px] font-normal leading-[22.5px] mm:text-lg mm:leading-[27px] xl:text-2xl xl:leading-9">Welcome to my project order form! Please fill out the details below to provide me with information about your project requirements. Let's create something amazing together!</p>
                <p className="text-[15px] font-normal leading-[22.5px] mm:text-lg mm:leading-[27px] xl:text-2xl xl:leading-9">After placing the order, I will contact you to confirm the details and proceed with the project.</p>
              </div>
              <div className="flex flex-col gap-5 mm:gap-[40px] xl:gap-[60px]">
                <FormContact />
                <div className="flex flex-col gap-5 mm:flex-row-reverse mm:gap-0 mm:justify-between">
                  <div className="w-[358px] h-[249px] mm:w-[368px] mm:h-[254px] md:h-[270px] xl:w-[632px] xl:h-[423px]">
                    <Image src={letsworkPhoto} alt="Let`s work together" width={633} height={454} 
                      className="object-cover" /> 
                  </div>
                  <div className="flex flex-col mm:justify-between">
                    <ContactsInfo />
                    <div className="flex justify-between items-center mm:flex-col mm:items-start mm:gap-4">
                      <Socials />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
    </main> 
)}
