"use client";

import { Button } from '@/components/ui/button'
import React from 'react';
import QuoteSvg from './img/quote.svg';
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
import { Divide } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className='bg-cover bg-[top_center] py-[100px]'>

        <div className="container">
            {/* Section Title */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-semibold leading-7 font-poppins">What People Say About</h2>
                <div className='inline-flex items-center gap-[25px]'>
                    <Button variant={'outline'} className='h-[42px] border-dark' >Browse All</Button>                
                    
                    <div className="flex items-center gap-[8px]">
                        {/* Arrow Left */}
                        <span className="testimonials-carousel--prev inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer">
                            <Image src={ArrowLeft} alt='arrow-left' />
                        </span>

                        {/* Arrow Right */}
                        <span className="testimonials-carousel--next inline-flex items-center justify-center w-[40px] min-w-[40px] h-[40px] cursor-pointer">
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
                        nextEl: ".testimonials-carousel--next",
                        prevEl: ".testimonials-carousel--prev",
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
                            spaceBetween: 44,
                            pagination: false
                        }
                    }}
                >
                    {slides.map(slide => {
                        return (
                            <SwiperSlide key={slide.id}>
                                <div  className='bg-black bg-opacity-[.03] p-[30px] rounded-2xl space-y-5'>
                                    <div>
                                        <Image src={QuoteSvg} alt='quote' />
                                    </div>
                                    { slide.content && <div className='font-roboto text-base font-light leading-10'>{ slide.content }</div>}

                                    <div className="h-[1px] w-full bg-black/10"></div>
                                    <div className="flex items-center gap-3">
                                        <div className="inline-flex items-center justify-center w-[53px] min-w-[53px] h-[53px] border-[3px] p-4px border-black border-opacity-[0.06] rounded-full">
                                            <Image src={slide.user?.thumb} alt="Thumb" />
                                        </div>
                                        <div className="">
                                            { slide.user?.name && <h3 className="font-open-sans italic font-semibold text-base">{ slide.user?.name }</h3>}
                                            {slide.user?.location && <div className='text-xs'>{ slide.user.location }</div>}
                                        </div>
                                    </div>

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

export default Testimonials;