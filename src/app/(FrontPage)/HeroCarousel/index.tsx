"use client";

import React from 'react';
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

        <div className="relative rounded-[1.75rem] overflow-hidden bg-slate-100 hero-pagination">
            
            <div className="absolute top-1/2 start-0 end-0 z-[20] w-full items-center gap-[8px] justify-between px-4 hidden md:flex">
                {/* Arrow Left */}
                <span className="hero-carousel--prev inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer group/arrow-left hover:bg-dark rounded-full transition-all duration-150">
                    <Image src={ArrowLeft} alt='arrow-left' className='group-hover/arrow-left:invert'/>
                </span>
                
                {/* Arrow Right */}
                <span className="hero-carousel--next inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer group/arrow-right hover:bg-dark rounded-full transition-all duration-150">
                    <Image src={ArrowRight} alt='arrow-right' className='group-hover/arrow-right:invert' />
                </span>
            </div>

            { slides &&<Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                className='slide-equal-height'
                // install Swiper modules
                navigation={{
                    nextEl: ".hero-carousel--next",
                    prevEl: ".hero-carousel--prev",
                    disabledClass: "swiper-button-disabled !opacity-10 pointer-events-none"
                }}
                pagination={{
                    el: "#containerForBullets", // Use a valid DOM element here
                    type: "bullets",
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                // pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        pagination: false
                    },
                }}
            >
                {slides.map(slide => {
                    return (
                        <SwiperSlide key={slide.id}>
                            <div className="bg-slate-100 flex flex-col justify-end bg-[bottom_center] bg-cover px-4 py-[30px] text-center min-h-[450px] md:min-h-[660px] relative before:content-[''] before:absolute before:bg-black/20 before:w-full before:h-full before:z-[1] before:start-0 before:top-0" style={{ backgroundImage: `url(${slide.thumb.src})` }}></div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            }

            <div className="min-h-[450px] md:min-h-[660px] absolute z-[12] top-0 start-0 end-0 flex flex-col justify-end pt-[100px] pb-[40px] md:p-[40px] text-white lg:gap-4">
                <div className="container max-w-[680px]">
                    <h2 className="font-poppins font-semibold text-[30px] md:text-[61px] text-center leading-8 mb-3 max-w-[200px] md:max-w-full mx-auto">Explore more for less</h2>
                    <div className="">
                        <Search />
                    </div>
                </div>
                <div id='containerForBullets' className='swiper-pagination top-[unset] !bottom-[unset]'></div>
                <div className="container">
                    <div className="font-inter font-light text-center text-[14px] lg:text-base line-2">
                        <strong>India:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy when. <Link href={'#'} className='underline underline-offset-2'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroCarousel;