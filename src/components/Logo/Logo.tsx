'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { ILogoProps } from "@/utils/types";


export default function Logo({type} : ILogoProps) {

  const pathname: string = usePathname();
  const colorLogo = pathname === '/' ? 'text-color-accent-primary' : 'text-color-secondary';
  const colorMobileMenuLogo = type === 'mobile' ? 'text-color-btn-secondary' : colorLogo;

  return (
    <Link href="/" target='_blank' aria-label={"Iryna-Buhaichuk"} rel="noopener noreferrer nofollow" className={`${colorMobileMenuLogo} font-condensed inline-block text-4xl not-italic font-bold leading-[43.2px] xl:text-5xl xl:leading-[48px]`}>Iryna Buhaichuk</Link>
  )
}

