"use client";

import { Button } from '@/components/ui/button'
import React from 'react';
import ArrowLeft from '@/images/arrow-left.svg';
import ArrowRight from '@/images/arrow-right.svg';
import Image from 'next/image';

// Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { slides } from './data';

const OurPartners = () => {
  return (
    <section className='bg-cover bg-[top_center] pt-[50px] pb-[100px]'>

        <div className="container">
            {/* Section Title */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-semibold leading-7 font-poppins">Our Partners</h2>
                <div className='inline-flex items-center gap-[25px]'>
                    <Button variant={'outline'} className='h-[42px] border-dark' >Browse All</Button>                
                    
                    <div className="flex items-center gap-[8px]">
                        {/* Arrow Left */}
                        <span className="our-partners-carousel--prev inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer">
                            <Image src={ArrowLeft} alt='arrow-left' />
                        </span>

                        {/* Arrow Right */}
                        <span className="our-partners-carousel--next inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer">
                            <Image src={ArrowRight} alt='arrow-right' />
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative">
                {slides &&<Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={15}
                    slidesPerView={4}
                    className='slide-equal-height default-pagination'
                    // install Swiper modules
                    navigation={{
                        nextEl: ".our-partners-carousel--next",
                        prevEl: ".our-partners-carousel--prev",
                        disabledClass: "swiper-button-disabled !opacity-25 pointer-events-none"
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
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