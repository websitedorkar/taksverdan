"use client";

import React from 'react';
import Nepal from './img/nepal.png';
import BgShape from './img/bg-shape.svg';
import Image from 'next/image';
import ArrowLeft from '@/images/arrow-left-light.svg';
import ArrowRight from '@/images/arrow-right-light.svg';

// Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { slides } from './data';
import ShareSVG from './img/share.svg';
import Link from 'next/link';

const AboutCountry = () => {
  return (
    <section className='py-[50px] relative z-[1] before:bg-[bottom_center] before:bg-cover before:w-full before:h-full before:max-h-screen before:absolute before:bg-white before:top-0 before:z-[-1] before:bg-hero-pattern'>
        <div className="container-fluid">

            {/* Section Title */}
            <div className="mb-[50px] text-center">
                <Image src={Nepal} alt="Nepal" className='inline-block w-[54px] lg:w-[75px]'/>
                <h2 className='text-3xl lg:text-6xl font-poppins font-semibold'>Nepal</h2> 
                <p>Lorem Ipsum is simply dummy <br /> text of the printing and typesetting</p>
            </div>

            <div className="grid grid-cols-12 gap-6">
                <div className="grid__item col-span-12 lg:col-span-7 xl:col-span-8">
                    <div className="relative rounded-[1.25rem] overflow-hidden bg-slate-100 hero-pagination">
                        
                        <div className="absolute top-1/2 start-0 end-0 z-[20] w-full items-center gap-[8px] justify-between px-10 hidden md:flex">
                            {/* Arrow Left */}
                            <span className="about-contry--prev inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer group/arrow-left hover:bg-dark rounded-full transition-all duration-150">
                                <Image src={ArrowLeft} alt='arrow-left' className='group-hover/arrow-left:invert'/>
                            </span>
                            
                            {/* Arrow Right */}
                            <span className="about-contry--next inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer group/arrow-right hover:bg-dark rounded-full transition-all duration-150">
                                <Image src={ArrowRight} alt='arrow-right' className='group-hover/arrow-right:invert' />
                            </span>
                        </div>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={1}
                                    className='slide-equal-height'
                                    // install Swiper modules
                                    navigation={{
                                        nextEl: ".about-contry--next",
                                        prevEl: ".about-contry--prev",
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
                                {slides.map((slide, index) => {
                                    return (
                                        <SwiperSlide key={slide.id ?? index}>
                                            <div className="bg-white flex flex-col justify-end bg-center bg-cover px-4 py-[30px] text-center min-h-[440px]" style={{ backgroundImage: `url(${slide.thumb.src})` }}></div>
                                        </SwiperSlide>
                                        )
                                    })}
                            </Swiper>
                        </div>
                </div>
                <div className="grid__item col-span-12 lg:col-span-5 xl:col-span-4 h-full">
                    <div className="h-full border border-dark border-opacity-10 rounded-lg p-3 lg:p-6 bg-white">
                        <div className="flex justify-between items-center gap-x-3">
                            <h2 className="text-dark text-xl font-poppins font-medium">About the Country</h2>
                            <Link href={'#'} className='text-lg font-poppins font-normal flex items-center gap-x-2'>
                                <Image src={ShareSVG} alt="Share" />
                                <span>Share</span>
                            </Link>
                        </div>
                        <hr className="my-3" />
                        <div className="font-roboto font-light text-lg leading-8 text-desc">
                            <p>Colorful prayer flags fluttering in the wind, experience bustling folk life in Nepal&apos;s capital Kathmandu, enjoy the view of the snow-capped Himalayan mountains from temples, jungles, boats and airplane windows. </p>
                            <p>Experience dzongs, temples and unique nature in the unique mountain country of Bhutan with the Tiger&apos;s Nest monastery as the ultimate highlight! </p>
                            <p>Visit the lowlands of Nepal in search of the Bengal tiger and visit the trekking town of Pokhara where we have majestic views of the Annapurna Mountains. </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default AboutCountry;