"use client";

import React from 'react';
import BannerBG from './img/hero-bg.jpg';
import Link from 'next/link';
import ArrowLeft from '@/images/arrow-left-light.svg';
import ArrowRight from '@/images/arrow-right-light.svg';
import Image from 'next/image';

// Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { slides } from './data';
import Search from './Search';


const HeroCarousel = () => {
    return (
    <div className='p-4'>

        <div className="relative rounded-[1.75rem] overflow-hidden bg-slate-100">
            
            <div className="absolute top-1/2 start-0 end-0 z-[20] w-full flex items-center gap-[8px] justify-between px-4">
                {/* Arrow Left */}
                <span className="hero-carousel--prev inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer">
                    <Image src={ArrowLeft} alt='arrow-left' />
                </span>

                {/* Arrow Right */}
                <span className="hero-carousel--next inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer">
                    <Image src={ArrowRight} alt='arrow-right' />
                </span>
            </div>

            { slides &&<Swiper
                modules={[Navigation]}
                slidesPerView={1}
                className='slide-equal-height'
                // install Swiper modules
                navigation={{
                    nextEl: ".hero-carousel--next",
                    prevEl: ".hero-carousel--prev",
                    disabledClass: "swiper-button-disabled !opacity-25 pointer-events-none"
                }}
            >
                {slides.map(slide => {
                    return (
                        <SwiperSlide key={slide.id}>
                            <div className="bg-slate-100 flex flex-col justify-end bg-[bottom_center] bg-cover px-4 py-[30px] text-center min-h-[660px] relative before:content-[''] before:absolute before:bg-black/20 before:w-full before:h-full before:z-[1] before:start-0 before:top-0" style={{ backgroundImage: `url(${slide.thumb.src})` }}></div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            }

            <div className="min-h-[660px] absolute z-[12] top-0 start-0 end-0 flex flex-col justify-end p-[40px] text-white gap-4">
                <div className="container max-w-[680px]">
                    <h2 className="font-poppins font-semibold text-[61px] text-center leading-8 mb-3">Explore more for less</h2>
                    <div className="">
                        <Search />
                    </div>
                </div>
                <div className="container">
                    <div className="font-inter font-light text-center">
                        <strong>India:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy when. <Link href={'#'} className='underline underline-offset-2'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroCarousel;