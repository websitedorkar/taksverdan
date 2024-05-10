"use client";

import React from 'react';
import LOGO_DESKTOP from './img/logo-horizontal-full.svg';
import LOGO_SM from './img/logo-sm.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from './navbar';
import Toggler from './Toggler';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='absolute top-0 start-0 end-0 z-20 px-[35px] lg:px-[60px] py-[40px]'>
        <div className="flex gap-4 items-center justify-between">
            {/* LOGO */}
            <div className="header__logo">
                <span className="inline-flex xl:hidden">
                    <Image src={LOGO_SM} alt='logo' />
                </span>
                <span className="hidden xl:inline-flex">
                    <Image src={LOGO_DESKTOP} alt='logo' />
                </span>
            </div>
            <div className="header__menu hidden xl:block">
                <Navbar />
            </div>        
            <div className="header__action inline-flex">
                <div className="hidden xl:block">
                    <Link href={'#map-destination-section'}><Button variant={'secondary'} size={'sm'}>MAP</Button></Link>
                </div>
                <div className="inline-flex xl:hidden">
                    <Toggler />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;