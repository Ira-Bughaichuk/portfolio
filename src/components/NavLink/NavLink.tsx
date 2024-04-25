"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { INavLinkProps } from "@/utils/types";
import { usePathname } from "next/navigation";

export default function NavLink({
  path,
  title,
  handlerToggle,
  type
}: INavLinkProps) {
  const [isActive, setIsActive] = useState('/');
  const pathname: string = usePathname();

  const textPage = pathname === '/' ? 'text-color-accent-primary md:text-color-accent-primary': 'text-color-secondary';
  const colorTextMobileMenu = type ==='mobile' ? 'text-color-btn-main' : textPage;
  const colorText = pathname === path ?  'text-color-btn-secondary' : colorTextMobileMenu;

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  return (
    <button
      type="button"
      className="relative group cursor-pointer"
      onClick={handlerToggle}
    >
      <Link
        href={path}
        className={`${colorText} text-xl font-medium leading-6 not-italic
        transition duration-500 ease-in-out group-hover:text-color-btn-secondary group-focus:text-color-btn-secondary 
        md:text-2xl md:text-color-text-primary md:font-normal`}
      >
        {title}
      </Link>
      <div className="absolute left-0 bottom-0 w-full h-0.5 origin-left bg-color-btn-secondary transition-all transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></div>

      {path === isActive && (
        <div className= {`absolute left-0 bottom-0 w-full h-0.5 origin-left bg-color-btn-secondary transition-all transform`}></div>
      )}
    </button>
  );
}
