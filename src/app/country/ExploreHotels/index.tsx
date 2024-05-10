"use client";

import React from 'react';
import StarSVG from './img/star.svg';
import Image from 'next/image';
import { hotels } from '@/data/hotels';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Import Swiper React components
import { Grid, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import DefaultPagination from '@/components/DefaultPagination';
import HotelCard from '@/components/Cards/HotelCard';

const ExploreHotels = () => {
    return (
    <section className='py-[50px]'>
        <div className="container-fluid">

            {/* Section Title */}
            <div className="flex items-center justify-between mb-7">
                <h2 className="text-2xl font-semibold leading-7 font-poppins">Explore Hotels</h2>
                <div className='inline-flex items-center gap-[25px]'>
                    <div>
                        <div className="flex items-center border border-dark gap-x-1 px-3 py-2 rounded-full relative">
                            <span className='text-nowrap'>Sort by:</span>
                            <Select defaultValue='5-starts'>
                            <SelectTrigger className="p-0 h-auto border-none shadow-none outline-none focus:border-0 focus:outline-none focus:shadow-none focus:ring-0 rounded-none gap-x-1 before:w-full before:h-full before:bg-transparent before:absolute before:start-0 before:top-0">
                                <SelectValue placeholder="Choose One" />
                            </SelectTrigger>
                            <SelectContent align='end' className='mt-5 min-w-[180px] translate-x-3 shadow-xl border border-slate-200 rounded-lg relative before:absolute before:w-0 before:h-0 before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-b-[10px] before:border-b-border before:top-[-10px] overflow-visible before:end-5 after:absolute after:w-0 after:h-0 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-b-[10px] after:border-b-white after:top-[-8px] after:end-5'>
                                <SelectGroup>
                                <SelectItem value="5-starts">5-starts</SelectItem>
                                <SelectItem value="4-starts">4-starts</SelectItem>
                                <SelectItem value="3-starts">3-starts</SelectItem>
                                <SelectItem value="2-starts">2-starts</SelectItem>
                                <SelectItem value="1-starts">1-starts</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

                {/* DESKTOP */}
            <div className="hidden lg:block">
                <div className="grid grid-cols-4 gap-6">
                    {hotels.slice(0, 8).map((hotel, index)=> {
                        return (
                            <div key={hotel.id ?? index} className="grid__item">
                                <HotelCard post={hotel} />
                            </div>
                        )
                    })}
                </div>
                <div className="pt-[50px]">
                    <DefaultPagination />
                </div>
            </div>
    
                {/* MOBILE */}
                <div className="block lg:hidden">
                {hotels &&<Swiper
                    modules={[Grid, Pagination, Navigation, ]}
                    spaceBetween={15}
                    slidesPerView={4}
                    grid={{
                        rows: 1,
                        fill: 'row',
                    }}
                    className='slide-equal-height default-pagination'
                    // install Swiper modules
                    navigation={{
                        nextEl: ".latest-tours-carousel--next",
                        prevEl: ".latest-tours-carousel--prev",
                        disabledClass: "swiper-button-disabled !opacity-25 pointer-events-none"
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            grid:{
                                rows: 2,
                                fill: 'row',
                            }
                        },
                        768: {
                            slidesPerView: 2,
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
                    {hotels.slice(0, 6).map((hotel, index) => {
                        return (
                            <SwiperSlide key={hotel.id ?? index}>
                                <HotelCard post={hotel} />
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

export default ExploreHotels;
