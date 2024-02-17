import  Link  from 'next/link';

export type IButtonsProps = {
  title: string;
  path: string;
  children: React.ReactNode;
}
export default function Buttons({title, path, children}: IButtonsProps) {
  return (
    <Link href={path} className='font-roboto w-full text-color-accent-primary border-[1px] border-solid border-color-btn-primary 
    transition duration-500 ease-in-out hover:bg-color-btn-secondary focus:bg-color-btn-primary hover:border-color-btn-secondary focus:border-color-btn-primary hover:text-color-secondary focus:text-color-secondary 
    text-lg not-italic font-bold leading-[21.6px] py-[14px] px-2 mm:text-[15px] mm:leading-[18px] mm:py-4 mm:px-[14px] md:leading-[21.6px] md:text-xl xl:px-5 xl:leading-6 rounded-lg bg-transparent flex items-center justify-center gap-2 mm:gap-[14px] xl:gap-[18px]'>
      {title}{children}
       </Link>
  )
}
