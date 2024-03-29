import Github from '../../../public/icons/github.svg';
import Telegram from '../../../public/icons/telegram.svg';
import Linkedin from '../../../public/icons/linkedIn.svg';
import Gmail from '../../../public/icons/gmail.svg';

export default function Socials() {
  return (
    <>
      <p className="font-roboto not-italic text-[15px] font-bold leading-[18px] mm:text-2xl mm:leading-[28,8px] xl:text-4xl xl:leading-[43,2px]">
        I am on social networks:
      </p>
      <ul className='flex gap-[14px] transition duration-500 ease-in-out text-color-btn-primary'>
        <li><a href='https://t.me/Iren_Bughaichuk' target="_blank" rel="noopener noreferrer nofollow" aria-label="Telegram"><Telegram width={30} height={30} aria-label="Telegram" className='w-[18px] h-[18px] mm:w-6 mm:h-6 xl:w-[30px] xl:h-[30px] hover:text-color-btn-extra focus:text-color-btn-secondary'/></a></li>
        <li><a href='https://github.com/Ira-Bughaichuk' target="_blank" rel="noopener noreferrer nofollow" aria-label="Github"><Github width={30} height={30} aria-label="Github" className='w-[18px] h-[18px] mm:w-6 mm:h-6 xl:w-[30px] xl:h-[30px] hover:text-color-btn-extra focus:text-color-btn-secondary'/></a></li>
        <li><a href='https://www.linkedin.com/feed/' target="_blank" rel="noopener noreferrer nofollow" aria-label="Linkedin"><Linkedin width={30} height={30} aria-label="Linkedin" className='w-[18px] h-[18px] mm:w-6 mm:h-6 xl:w-[30px] xl:h-[30px] hover:text-color-btn-extra focus:text-color-btn-secondary'/></a></li>
        <li><a href='mailto:irynabugaichuk7@gmail.com' target="_blank" rel="noopener noreferrer nofollow" aria-label="Gmail"><Gmail width={30} height={30} aria-label="Gmail" className='w-[18px] h-[18px] mm:w-6 mm:h-6 xl:w-[30px] xl:h-[30px] hover:text-color-btn-extra focus:text-color-btn-secondary'/></a></li> 
      </ul>
    </>
  )
}
