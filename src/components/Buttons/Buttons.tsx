import  Link  from 'next/link';

export type IButtonsProps = {
  title: string;
  path: string;
  children: React.ReactNode;
}
export default function Buttons({title, path, children}: IButtonsProps) {
  return (
    <Link href={path} className='font-roboto
    transition duration-500 ease-in-out hover:bg-color-btn-secondary focus:bg-color-btn-primary hover:border-color-btn-secondary focus:border-color-btn-primary hover:text-color-secondary focus:text-color-secondary 
    w-full text-color-accent-primary border-[1px] border-solid border-color-btn-primary text-lg not-italic font-bold leading-[21.6px] py-[14px] px-2 md:py-4 md:px-[14px] xl:px-5 rounded-lg bg-transparent flex items-center justify-center gap-2 md:gap-[14px] xl:gap-[18px]'>{title} {children}</Link>
  )
}
