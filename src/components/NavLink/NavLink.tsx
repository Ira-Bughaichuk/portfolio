import  Link  from 'next/link';
import { INavLinkProps } from '@/utils/types';


export default function NavLink({path, title} : INavLinkProps) {
  return (
    <Link href={path} className="text-xl font-medium leading-6 not-italic text-color-secondary md:text-color-accent-primary md:text-2xl md:text-color-text-primary md:font-normal">{title}</Link>
  )
}
