'use client';

import { useState } from 'react';
import Navbar from './../../components/Navbar/Navbar';
import Logo from './../../components/Logo/Logo';
import MenuOverlay from './../../components/MenuOverlay/MenuOverlay';
import ButtonNav from './../../components/ButtonNav/ButtonNav';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
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
          <div className='block md:hidden'>
          { !isOpen ?  <ButtonNav handlerToggle={handlerToggle} open={isOpen} /> : null}
          </div>
        </div>
        {isOpen ? <MenuOverlay open={isOpen} handlerToggle={handlerToggle}/> : null }
      </div>
    </header>
  );
}
