"use client";

import { Button } from '@/components/ui/button'
import React from 'react';
import BG from '@/images/bg-art.svg';
import LocationSVG from './img/location.svg';
import ArrowLeft from '@/images/arrow-left.svg';
import ArrowRight from '@/images/arrow-right.svg';
import Image from 'next/image';

// Import Swiper React components
import { Grid, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import { slides } from './data';
import Link from 'next/link';

const ExploreContinents = () => {
  return (
    <section className='bg-cover bg-[top_center] py-[50px]' style={{ backgroundImage: `url( ${BG.src} )`}}>

        <div className="container-fluid">
            {/* Section Title */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-semibold leading-7 font-poppins">Explore Continents</h2>
                <div className='inline-flex items-center gap-[25px]'>
                    <Button variant={'outline'} className='h-[42px] border-dark' >Browse All</Button>                
                    
                    <div className="hidden md:flex items-center gap-[8px]">
                        {/* Arrow Left */}
                        <span className="explore-continents-carousel--prev inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer group/arrow-left hover:bg-dark rounded-full transition-all duration-150">
                            <Image src={ArrowLeft} alt='arrow-left' className='group-hover/arrow-left:invert' />
                        </span>

                        {/* Arrow Right */}
                        <span className="explore-continents-carousel--next inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer group/arrow-right hover:bg-dark rounded-full transition-all duration-150 ">
                            <Image src={ArrowRight} alt='arrow-right' className='group-hover/arrow-right:invert' />
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative">
                {slides &&<Swiper
                    modules={[Grid, Pagination, Navigation, ]}
                    spaceBetween={15}
                    grid={{
                        rows: 1,
                        fill: 'row',
                    }}
                    slidesPerView={4}
                    className='slide-equal-height default-pagination'
                    // install Swiper modules
                    navigation={{
                        nextEl: ".explore-continents-carousel--next",
                        prevEl: ".explore-continents-carousel--prev",
                        disabledClass: "swiper-button-disabled !opacity-25 pointer-events-none"
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                            grid:{
                                rows: 2,
                                fill: 'row',
                            }
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                            grid:{
                                rows: 2,
                                fill: 'row',
                            }
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                            pagination: false
                        },
                        1366: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                            pagination: false
                        },
                    }}
                >
                    {slides.map(slide => {
                        return (
                            <SwiperSlide key={slide.id}>
                                
                                <Link href={'#'} className='z-[1] bg-cover bg-center text-white min-h-[192px] md:min-h-[340px] rounded-2xl p-5 flex flex-col justify-end relative before:content-[""] before:w-full before:h-[115px] before:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_100%)] before:opacity-80 before:absolute before:start-0 before:end-0 before:bottom-0 overflow-hidden before:z-[-1]' style={{ backgroundImage: `url(${ slide.thumbnail.src ?? '' })` }}>
                                    { slide.title && <h3 className="font-roboto text-xl mb-1">{ slide.title }</h3>}
                                    { slide.location && <div className='flex items-center gap-2 text-base'>
                                    <Image src={LocationSVG} alt={slide.location} />
                                    { slide.location }
                                    </div>}
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                }
            </div>
        </div>
    </section>
  )
}

export default ExploreContinents;