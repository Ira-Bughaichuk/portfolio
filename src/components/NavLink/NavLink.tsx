'use client';
import  Link  from 'next/link';
import { INavLinkProps } from '@/utils/types';
import { usePathname } from 'next/navigation';

export default function NavLink({path, title, handlerToggle} : INavLinkProps) {
  const pathname: string = usePathname();
  const textPage = pathname === '/' ? 'text-color-accent-primary md:text-color-accent-primary': 'text-color-secondary';
  const isActive = pathname === path ?  'text-color-accent-primary' : textPage;
  return (
    <button type="button" onClick={handlerToggle}>
      <Link href={path}  className={`${isActive} text-xl font-medium leading-6 not-italic
      transition duration-500 ease-in-out hover:text-color-btn-secondary  md:hover:text-color-btn-secondary focus:text-color-btn-secondary hover:font-bold
       md:text-2xl md:text-color-text-primary md:font-normal`}>{title}</Link>
    </button>
  )
}
