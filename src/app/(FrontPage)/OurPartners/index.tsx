"use client";

import { Button } from '@/components/ui/button'
import React from 'react';
import ArrowLeft from '@/images/arrow-left.svg';
import ArrowRight from '@/images/arrow-right.svg';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Grid, Pagination, Navigation } from 'swiper/modules';

import { slides } from './data';

const OurPartners = () => {
  return (
    <section className='bg-cover bg-[top_center] py-[50px]'>
        <div className="container-fluid">
            {/* Section Title */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-semibold leading-7 font-poppins">Our Partners</h2>
                <div className='inline-flex items-center gap-[25px]'>
                    <Button variant={'outline'} className='h-[42px] border-dark' >Browse All</Button>                
                    
                    <div className="hidden md:flex items-center gap-[8px]">
                        {/* Arrow Left */}
                        <span className="our-partners-carousel--prev inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer group/arrow-left hover:bg-dark rounded-full transition-all duration-150">
                            <Image src={ArrowLeft} alt='arrow-left' className='group-hover/arrow-left:invert' />
                        </span>

                        {/* Arrow Right */}
                        <span className="our-partners-carousel--next inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer group/arrow-right hover:bg-dark rounded-full transition-all duration-150 ">
                            <Image src={ArrowRight} alt='arrow-right' className='group-hover/arrow-right:invert' />
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative">
                {slides &&<Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    grid={{
                        rows: 1,
                        fill: 'row',
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className='slide-equal-height default-pagination'
                    // install Swiper modules
                    navigation={{
                        nextEl: ".our-partners-carousel--next",
                        prevEl: ".our-partners-carousel--prev",
                        disabledClass: "swiper-button-disabled !opacity-25 pointer-events-none"
                    }}
                    modules={[Grid, Pagination, Navigation, ]}
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
                                <div  className='bg-light h-[115px] rounded-2xl p-4 flex items-center justify-center'>
                                    {<Image src={slide.thumbnail} alt={'slide.date'} />}
                                </div>
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

export default OurPartners;