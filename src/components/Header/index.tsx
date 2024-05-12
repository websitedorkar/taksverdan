"use client";

import React, { useEffect, useState } from 'react';
import LOGO_DESKTOP_DARK from './img/logo-desktop-dark.svg';
import LOGO_SM_DARK from './img/logo-sm-dark.svg';
import LOGO_DESKTOP_LIGHT from './img/logo-desktop-light.svg';
import LOGO_SM_LIGHT from './img/logo-sm-light.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from './navbar';
import Toggler from './Toggler';
import Link from 'next/link';
import MapButton from '../Modals/MapButton';

interface HeaderProps {
    btn_label: string;
    btn_url?: string;
    isMap?: boolean;
    bgTransparent?: boolean;
    btn_variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null | undefined;
  }
  
const Header: React.FC<HeaderProps> = ({ btn_label, btn_url, isMap, bgTransparent = false, btn_variant }) => {
    const [openModal, setOpenModal] = useState<boolean >(false);
    const [isSticky, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 245); // Set isSticky based on scroll position
        };

        window.addEventListener('scroll', handleScroll); // Listen to scroll event

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up event listener on unmount
        };
    }, []);

  return (
    <>
        <header className={` absolute top-0 start-0 end-0 ${ bgTransparent ? isSticky ? 'text-dark' : 'text-white bg-transparent pt-[40px] px-[20px] lg:px-0' : 'bg-white border-b border-[#E5E5E5]' } py-[10px] z-20 ${isSticky ? 'header--sticky' : ''}`}>
            <div className="container-fluid">
                <div className="flex gap-4 items-center justify-between">
                    {/* LOGO */}
                    <Link href={'/'} className="header__logo inline-flex">
                        {/* <span className="inline-flex xl:hidden">
                            {
                                bgTransparent && !isSticky ?
                                <Image src={LOGO_SM_LIGHT} alt='logo' className='h-[44px]'/>
                                :
                                <Image src={LOGO_SM_DARK} alt='logo' className='h-[44px]'/>
                            }
                        </span>
                        <span className="hidden xl:inline-flex">
                            {
                                bgTransparent && !isSticky ?
                                <Image src={LOGO_DESKTOP_LIGHT} alt='logo'  className='h-[56px]'/>
                                :
                                <Image src={LOGO_DESKTOP_DARK} alt='logo'  className='h-[56px]'/>
                            }
                        </span> */}
                        <span className="inline-flex">
                            {
                                bgTransparent && !isSticky ?
                                <Image src={LOGO_DESKTOP_LIGHT} alt='logo'  className='h-[56px] max-w-[50vw]'/>
                                :
                                <Image src={LOGO_DESKTOP_DARK} alt='logo'  className='h-[56px] max-w-[50vw]'/>
                            }
                        </span>
                    </Link>
                    <div className="header__menu hidden lg:block">
                        <Navbar isSticky={isSticky}/>
                    </div>        
                    <div className="header__action inline-flex">
                        <div className="hidden lg:block">
                            { isMap ? 
                            <>
                                <Button variant={ isSticky ? 'default' : btn_variant ?? 'default'}  size={'sm'} className='py-2 px-5 min-w-[80px] uppercase h-auto' onClick={() => setOpenModal(true)}>{ btn_label }</Button>
                                <MapButton isOpenModal={openModal} setModalOpen={setOpenModal}/>
                            </>
                            :
                            <>
                                <Link href={btn_url ?? ''}><Button variant={ btn_variant ?? 'default'} size={'sm'} className='py-2 px-5 min-w-[80px] uppercase h-auto'>{ btn_label }</Button></Link>
                            </>
                            }
                        </div>
                        <div className="inline-flex lg:hidden">
                            <Toggler classNames={bgTransparent && !isSticky ? 'text-white' : 'text-dark'}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
  )
}

export default Header;