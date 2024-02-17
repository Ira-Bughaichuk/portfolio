import  Link  from 'next/link';
import { INavLinkProps } from '@/utils/types';


export default function NavLink({path, title, handlerToggle} : INavLinkProps) {
  return (
    <button onClick={handlerToggle}>
      <Link href={path}  className="text-xl font-medium leading-6 not-italic
      transition duration-500 ease-in-out hover:text-color-btn-secondary  md:hover:text-color-btn-secondary focus:text-color-btn-secondary hover:font-bold
      text-color-secondary md:text-color-accent-primary md:text-2xl md:text-color-text-primary md:font-normal">{title}</Link>
    </button>
    )
}
