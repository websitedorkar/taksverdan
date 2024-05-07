"use client";

import React from 'react';
import LOGO_DESKTOP from './img/logo-horizontal-full.svg';
import LOGO_SM from './img/logo-sm.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from './navbar';
import { useMediaQuery } from '@/hooks/use-media-query';
import Toggler from './Toggler';
import Link from 'next/link';

const Header = () => {
    // Check if window is defined before accessing its properties
    const isDesktop = useMediaQuery("(min-width: 1199px)");
    const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header className='absolute top-0 start-0 end-0 z-20 px-[35px] lg:px-[60px] py-[40px]'>
        <div className="flex gap-4 items-center justify-between">
            {/* LOGO */}
            <div className="header__logo">
                <Image src={isDesktop ? LOGO_DESKTOP : LOGO_SM} alt='logo' />
            </div>
            {isDesktop &&
            <div className="header__menu">
                <Navbar />
            </div>        
            }
            <div className="header__action">
            {isDesktop ?
                <Link href={'#map-destination-section'}><Button variant={'secondary'} size={'sm'}>MAP</Button></Link>
                :
                <Toggler />
            }
            </div>
        </div>
    </header>
  )
}

export default Header;