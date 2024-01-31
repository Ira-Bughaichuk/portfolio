'use client';

import { useState, useEffect } from 'react';
import Navbar from './../../components/Navbar/Navbar';
import Logo from './../../components/Logo/Logo';
import MenuOverlay from './../../components/MenuOverlay/MenuOverlay';
import ButtonNav from './../../components/ButtonNav/ButtonNav';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add('lock');
  //   } else {
  //     document.body.classList.remove('lock');
  //   }

  //   return () => {
  //     document.body.classList.remove('lock');
  //   };
  // }, [isOpen]);

  // const handlerToggle = ()=>{
  //   setIsOpen(!isOpen);
  // }
  const handlerToggle =()=>{
    setIsOpen(!isOpen);
    const body = document.body;
    const isOverflowHidden = body.style.overflow === 'hidden';
    body.style.overflow = isOverflowHidden ? 'visible' : 'hidden';
  }

  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <Navbar />
          <div className='block xl:hidden'>
          { !isOpen ?  <ButtonNav handlerToggle={handlerToggle} open={isOpen} /> : null}
          </div>
        </div>
        {isOpen ? <MenuOverlay open={isOpen} handlerToggle={handlerToggle}/> : null }
      </div>
    </header>
  );
}
