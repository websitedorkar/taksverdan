"use client";

import React from 'react';
import LOGO_DESKTOP from './img/logo-primary.svg';
import LOGO_SM from './img/logo-sm.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from './navbar';
import Toggler from './Toggler';
import Link from 'next/link';

const PrimaryHeader = () => {
  return (
    <header className='py-[10px] border-b border-[#E5E5E5] z-20 relative'>
        <div className="container-fluid">
            <div className="flex gap-4 items-center justify-between">
                {/* LOGO */}
                <div className="header__logo inline-flex">
                    <span className="inline-flex xl:hidden">
                        <Image src={LOGO_SM} alt='logo' />
                    </span>
                    <span className="hidden xl:inline-flex">
                        <Image src={LOGO_DESKTOP} alt='logo'  className='h-[56px]'/>
                    </span>
                </div>
                <div className="header__menu hidden xl:block">
                    <Navbar />
                </div>        
                <div className="header__action inline-flex">
                    <div className="hidden xl:block">
                        <Link href={'#map-destination-section'}><Button variant={'default'} size={'sm'}>MAP</Button></Link>
                    </div>
                    <div className="inline-flex xl:hidden">
                        <Toggler />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default PrimaryHeader;