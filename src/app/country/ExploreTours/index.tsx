"use client";

import React from 'react';
import PlaneSVG from '@/images/plane.svg';
import Image from 'next/image';
import { tours } from '@/data/tours';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
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
import TourCard from '@/components/Cards/TourCard';

const ExploreTours = () => {
    return (
        <>
        <section className="py-[50px]">
            <div className="container-fluid">
                {/* Section Title */}
                <div className="flex items-center justify-between mb-7">
                    <h2 className="text-2xl font-semibold leading-7 font-poppins">Explore tours</h2>
                </div>

                <div className="grid grid-cols-12 gap-6">
                        {tours.slice(0, 1).map((tour, index)=> {
                            return (
                                <div key={tour.id ?? index} className="grid__item h-full col-span-12 lg:col-span-5 xl:col-span-3">
                                    <TourCard post={tour} />
                                </div>
                            )
                        })}                  
                        <div className="grid__item col-span-12 lg:col-span-7 xl:col-span-9 h-full">
                            <div className="h-full flex flex-col border border-dark border-opacity-10 rounded-lg p-3 lg:p-6">
                                <h2 className="text-dark text-xl font-poppins font-medium mb-3">About the Tour</h2>
                                <div className="font-inter font-normal text-lg leading-8 text-desc mb-6">
                                    <p>Colorful prayer flags fluttering in the wind, experience bustling folk life in Nepal&apos;s capital Kathmandu, enjoy the view of the snow-capped Himalayan mountains from temples, jungles, boats and airplane windows. </p>
                                    <p>Experience dzongs, temples and unique nature in the unique mountain country of Bhutan with the Tiger&apos;s Nest monastery as the ultimate highlight! Visit the lowlands of Nepal in search of the Bengal tiger and visit the trekking town of Pokhara where we have majestic views of the Annapurna Mountains. There are many highlights on this exciting trip to Nepal and Bhutan!</p>
                                </div>
                                
                                <div className='text-xl font-poppins font-medium flex items-center gap-x-2 mt-auto'>
                                    <Image src={PlaneSVG} alt="Plane" />
                                    <span>Departure: 08 Feb, 2025</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        
        <section className='py-[50px]'>
            <div className="container-fluid">
                {/* Section Title */}
                <div className="flex items-center justify-between mb-7">
                    <h2 className="text-2xl font-semibold leading-7 font-poppins">Explore tours</h2>
                    <div className='inline-flex items-center gap-[25px]'>
                        <div>
                            <div className="flex items-center border border-dark gap-x-1 px-3 py-2 rounded-full relative">
                                <span className='text-nowrap'>Sort by:</span>
                                <Select defaultValue='group'>
                                <SelectTrigger className="p-0 h-auto border-none shadow-none outline-none focus:border-0 focus:outline-none focus:shadow-none focus:ring-0 rounded-none gap-x-1 before:w-full before:h-full before:bg-transparent before:absolute before:start-0 before:top-0">
                                    <SelectValue placeholder="Choose One" />
                                </SelectTrigger>
                                <SelectContent align='end' className='mt-5 min-w-[180px] translate-x-3 shadow-xl border border-slate-200 rounded-lg relative before:absolute before:w-0 before:h-0 before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-b-[10px] before:border-b-border before:top-[-10px] overflow-visible before:end-5 after:absolute after:w-0 after:h-0 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-b-[10px] after:border-b-white after:top-[-8px] after:end-5'>
                                    <SelectGroup>
                                    <SelectItem value="group">Group</SelectItem>
                                    <SelectItem value="featured">Featured</SelectItem>
                                    <SelectItem value="earlier">Earlier</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* DESKTOP */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        { tours.slice(0, 8).map((tour, index)=> {
                        return (
                            <div key={tour.id ?? index} className="grid__item">
                            <TourCard post={tour} />
                            </div>
                        )})}
                    </div>

                    <div className="pt-[50px]">
                        <DefaultPagination />
                    </div>
                </div>
                    {/* MOBILE */}
                <div className="block lg:hidden">
                    {tours &&<Swiper
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
                        {tours.slice(0, 6).map((tour, index) => {
                            return (
                                <SwiperSlide key={tour.id ?? index}>
                                    <TourCard post={tour} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    }
                </div>
            </div>
        </section>        
        </>
    )
}

export default ExploreTours;

