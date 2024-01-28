import  Link  from 'next/link';

export type IButtonsProps = {
  title: string,
  icon: string,
  path: string,
}
export default function Buttons({title, icon, path}: IButtonsProps) {
  return (
    <Link href={path} className='w-full text-color-accent-primary border-[1px] border-solid border-color-btn-primary text-lg not-italic font-bold leading-[21.6px] py-[14px] px-2 md:py-4 md:px-[14px] xl:px-5 rounded-lg bg-transparent flex justify-center gap-2 md:gap-[14px] xl:gap-[18px]'>{title} ic</Link>
  )
}
