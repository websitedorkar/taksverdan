import React from 'react';
import LOGO from './img/logo-horizontal-full.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from './navbar';

const Header = () => {
  return (
    <header className='absolute top-0 start-0 end-0 z-20 px-[40px] py-[40px]'>
        <div className="flex gap-4 items-center justify-between">
            {/* LOGO */}
            <div className="header__logo">
                <Image src={LOGO} alt='logo' />
            </div>
            {/* MENU */}
            <div className="header__menu">
                <Navbar />
            </div>
            <div className="header__action">
                <Button variant={'secondary'} size={'sm'}>MAP</Button>
            </div>
        </div>
    </header>
  )
}

export default Header;