"use client";

import React, { useState } from 'react';
import LOGO_DESKTOP from './img/logo-horizontal-full.svg';
import LOGO_SM from './img/logo-sm.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from './navbar';
import Toggler from './Toggler';
import Link from 'next/link';
import MapButton from '../Modals/MapButton';

const Header = () => {
    const [openModal, setOpenModal] = useState<boolean >(false);

  return (
    <header className='absolute top-0 start-0 end-0 z-20 px-[35px] lg:px-[60px] py-[40px]'>
        <div className="container-fluid">
            <div className="flex gap-4 items-center justify-between">
                {/* LOGO */}
                <Link href={'/'} className="header__logo">
                    <span className="inline-flex xl:hidden">
                        <Image src={LOGO_SM} alt='logo' />
                    </span>
                    <span className="hidden xl:inline-flex">
                        <Image src={LOGO_DESKTOP} alt='logo' />
                    </span>
                </Link>
                <div className="header__menu hidden xl:block">
                    <Navbar />
                </div>        
                <div className="header__action inline-flex">
                    <div className="hidden xl:block">
                        <Button variant={'secondary'} size={'sm'} className='px-5' onClick={() => setOpenModal(true)}>Map</Button>
                        <MapButton isOpenModal={openModal} setModalOpen={setOpenModal}/>
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

export default Header;