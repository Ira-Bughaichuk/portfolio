import  Link  from 'next/link';
import { INavLinkProps } from '@/utils/types';


export default function NavLink({path, title} : INavLinkProps) {
  return (
    <Link href={path} className="text-xl font-medium leading-6 not-italic text-color-secondary xl:text-2xl xl:text-color-text-primary xl:font-normal">{title}</Link>
  )
}
