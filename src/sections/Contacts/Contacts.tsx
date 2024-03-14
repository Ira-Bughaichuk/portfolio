import Title from './../../components/Title/Title';
import BtnToPage from './../../components/BtnToPage/BtnToPage';
import ContactsInfo from './../../components/ContactsInfo/ContactsInfo';
import Square from '../../../public/icons/square.svg';
import Socials from './../../components/Socials/Socials';

export default function Contacts() {
  return (
    <section className="section">
        <div className="container mx-auto">
        <Title type="main" title={"Contacts"} />
        <div className='flex flex-col gap-[30px] mm:gap-[40px]'>
            
            <div className="flex flex-col gap-3 mm:flex-row mm:justify-between">
                <ContactsInfo />
                <div className="flex justify-between items-center mm:flex-col mm:justify-between">
                  <Socials />
                </div>
            </div>

            <div className='flex flex-col items-center font-condensed'>
                <p className='mb-2 mm:mb-3 text-xl font-medium mm:font-bold leading-6 xl:text-2xl xl:leading-[28,8px]'>I always ready to take on your orders!</p>
                <p className='mb-4 mm:mb-5 text-[15px] mm:text-lg font-normal leading-[22,5px] mm:leading-[27px] xl:text-2xl xl:leading-9'>Reach out to me to kickstart your project</p>
                <BtnToPage path={'/contacts'} title={'Get Started'} >
                  <Square width={24} height={24} aria-label="Square" />
                </BtnToPage>
            </div>
        </div>
        </div>
    </section>
  )
}
