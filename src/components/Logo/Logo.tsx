'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
// text-color-accent-primary
export default function Logo() {
  const pathname: string = usePathname();
  const isActive = pathname === '/' ? 'text-color-accent-primary' : 'text-color-secondary';
  
  return (
    <Link href="/" className={`${isActive} font-condensed  text-4xl not-italic font-bold leading-[43.2px] xl:text-5xl xl:leading-[48px]`}>Iryna Buhaichuk</Link>
  )
}

