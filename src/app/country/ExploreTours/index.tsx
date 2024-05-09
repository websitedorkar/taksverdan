"use client";

import React from 'react';
import LocationSVG from './img/location.svg';
import PlaneSVG from '@/images/plane.svg';
import Image from 'next/image';
// import {
//         Pagination,
//         PaginationContent,
//         PaginationEllipsis,
//         PaginationItem,
//         PaginationLink,
//         PaginationNext,
//         PaginationPrevious,
//     } from "@/components/ui/pagination"
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
                                        <div  className='z-[1] bg-cover bg-center text-white h-full min-h-[192px] md:min-h-[340px] rounded-2xl p-5 flex flex-col justify-end relative before:content-[""] before:w-full before:h-[115px] before:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_100%)] before:opacity-80 before:absolute before:start-0 before:end-0 before:bottom-0 overflow-hidden before:z-[-1]' style={{ backgroundImage: `url(${ tour.thumbnail.src ?? '' })` }}>
                                            { tour.title && <h3 className="font-roboto text-lg lg:text-xl mb-1">{ tour.title }</h3>}
                                            { tour.location && <div className='flex items-center gap-2 text-[13px] lg:text-base'>
                                            <Image src={LocationSVG} alt={tour.location} />
                                            { tour.location }
                                            </div>}
                                        </div>
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
                            {tours.slice(0, 8).map((tour, index)=> {
                                return (
                                    <div key={tour.id ?? index} className="grid__item">
                                        <div  className='z-[1] bg-cover bg-center text-white min-h-[192px] md:min-h-[340px] rounded-2xl p-5 flex flex-col justify-end relative before:content-[""] before:w-full before:h-[115px] before:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_100%)] before:opacity-80 before:absolute before:start-0 before:end-0 before:bottom-0 overflow-hidden before:z-[-1]' style={{ backgroundImage: `url(${ tour.thumbnail.src ?? '' })` }}>
                                            { tour.title && <h3 className="font-roboto text-lg lg:text-xl mb-1">{ tour.title }</h3>}
                                            { tour.location && <div className='flex items-center gap-2 text-[13px] lg:text-base'>
                                            <Image src={LocationSVG} alt={tour.location} />
                                            { tour.location }
                                            </div>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="pt-[50px]">
                            {/* <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                    <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        2
                                    </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                    <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                    <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                                </Pagination> */}
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
                                        <div  className='z-[1] bg-cover bg-center text-white min-h-[192px] md:min-h-[340px] rounded-2xl p-5 flex flex-col justify-end relative before:content-[""] before:w-full before:h-[115px] before:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_100%)] before:opacity-80 before:absolute before:start-0 before:end-0 before:bottom-0 overflow-hidden before:z-[-1]' style={{ backgroundImage: `url(${ tour.thumbnail.src ?? '' })` }}>
                                            { tour.title && <h3 className="font-roboto text-lg lg:text-xl mb-1">{ tour.title }</h3>}
                                            { tour.location && <div className='flex items-center gap-2 text-[13px] lg:text-base'>
                                            <Image src={LocationSVG} alt={tour.location} />
                                            { tour.location }
                                            </div>}
                                        </div>
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

export default ExploreTours