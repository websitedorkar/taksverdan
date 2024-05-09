import React from 'react';
import StarSVG from './img/star.svg';
import Image from 'next/image';
import {
        Pagination,
        PaginationContent,
        PaginationEllipsis,
        PaginationItem,
        PaginationLink,
        PaginationNext,
        PaginationPrevious,
    } from "@/components/ui/pagination"
import { hotels } from '@/data/hotels';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

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

            <div className="grid grid-cols-4 gap-6">
                {hotels.slice(0, 8).map((hotel, index)=> {
                    return (
                        <div key={hotel.id ?? index} className="grid__item">
                            <div  className='z-[1] bg-cover bg-center text-white min-h-[192px] md:min-h-[340px] rounded-2xl p-5 flex flex-col justify-end relative before:content-[""] before:w-full before:h-[115px] before:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_100%)] before:opacity-80 before:absolute before:start-0 before:end-0 before:bottom-0 overflow-hidden before:z-[-1]' style={{ backgroundImage: `url(${ hotel.thumbnail.src ?? '' })` }}>
                                { hotel.title && <h3 className="font-roboto text-lg lg:text-xl mb-1">{ hotel.title }</h3>}
                                { hotel.total_ratings && <div className='flex items-center gap-1 text-[13px] lg:text-sm'>
                                <Image src={StarSVG} alt={`${hotel.ratings} ${hotel.total_ratings}`} />
                                <span className="text-[#FCA800]">{hotel.ratings}</span>({ hotel.total_ratings })
                                </div>}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="pt-[50px]">
                <Pagination>
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
                    </Pagination>
            </div>
        </div>
    </section>
    )
}

export default ExploreHotels