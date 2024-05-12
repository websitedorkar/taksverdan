"use client";

import React from 'react';
import LOGO_DESKTOP from './img/logo-primary.svg';
import LOGO_SM from './img/logo-sm.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from './navbar';
import Toggler from './Toggler';
import Link from 'next/link';
import MapButton from './MapButton';

interface PrimaryHeaderProps {
    btn_label: string;
    btn_url: string;
    isMap?: boolean;
  }
  
const PrimaryHeader: React.FC<PrimaryHeaderProps> = ({ btn_label, btn_url, isMap }) => {
  return (
    <>
        <header className='py-[10px] border-b border-[#E5E5E5] z-20 relative'>
            <div className="container-fluid">
                <div className="flex gap-4 items-center justify-between">
                    {/* LOGO */}
                    <Link href={'/'} className="header__logo inline-flex">
                        <span className="inline-flex xl:hidden">
                            <Image src={LOGO_SM} alt='logo' />
                        </span>
                        <span className="hidden xl:inline-flex">
                            <Image src={LOGO_DESKTOP} alt='logo'  className='h-[56px]'/>
                        </span>
                    </Link>
                    <div className="header__menu hidden xl:block">
                        <Navbar />
                    </div>        
                    <div className="header__action inline-flex">
                        <div className="hidden xl:block">
                            {/* <Link href={btn_url}><Button variant={'default'} size={'sm'} className='px-5'>{btn_label}</Button></Link> */}
                            <MapButton />
                        </div>
                        <div className="inline-flex xl:hidden">
                            <Toggler />
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
  )
}

export default PrimaryHeader;