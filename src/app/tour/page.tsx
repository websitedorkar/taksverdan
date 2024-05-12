"use client";
import React from 'react'
import PlaneIcon from '@/images/plane.svg';
import HomeIcon from '@/images/home.svg';
import MetterIcon from '@/images/icon-metter.svg';
import BedIcon from '@/images/bed.svg';
import CloudIcon from '@/images/cloud.svg';
import GlobalIcon from '@/images/icon-global.svg';
import CheckIcon from '@/images/icon-check.svg';
import DollarIcon from '@/images/icon-dollar.svg';
import PdfIcon from '@/images/icon-pdf.svg';
import Link from 'next/link';
import Banner_2 from './img/banner-2.png';
import Banner_3 from './img/banner-3.png';
import IconCloud from './img/icon-cloud.svg';
import MapDestinationBanner from './img/map-destinations.png';
import ShareSVG from './img/share.svg';
import StarSVG from '@/images/star.svg';
import ArrowRightSVG from '@/images/long-arrow-right.svg';
import MapMarker from './img/map-marker.svg';
import Image from 'next/image';
import { Textarea } from "@/components/ui/textarea"
import { bookings, includes, itinerary, slides } from './data';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import ArrowLeft from '@/images/arrow-left-light.svg';
import ArrowRight from '@/images/arrow-right-light.svg';

import { Link as ScrollLink } from 'react-scroll';

// Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';
import MapDestination from './MapDestination';

const Tour = () => {
  return (
    <section className='py-[50px] relative z-[1] before:bg-[bottom_center] before:bg-cover before:w-full before:h-screen before:absolute before:bg-white before:top-0 before:z-[-1] before:bg-hero-pattern'>
      <div className="container-fluid">
          {/* Section Title */}
          <div className="mb-[20px]">
              <h2 className='text-xl lg:text-2xl font-poppins font-semibold mb-1'>Group Tour: Lakehouse Pier Lake</h2> 
              <div className='flex items-center gap-2 text-sm lg:text-lg font-poppins font-regular'><Image src={MapMarker} alt='map' />Katmandu, Nepal</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="col-span-1 lg:col-span-8">
              <div className="relative rounded-[1.25rem] overflow-hidden bg-slate-100 hero-pagination mb-[30px] md:mb-[50px]">
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 z-[20] w-full items-center gap-[8px] justify-between px-4 lg:px-10 flex">
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
                              pagination: true
                          },
                      }}
                  >
                  {slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={slide.id ?? index}>
                            <div className="bg-white flex flex-col justify-end bg-center bg-cover px-4 py-[30px] text-center min-h-[230px] lg:min-h-[440px]" style={{ backgroundImage: `url(${slide.thumb.src})` }}></div>
                        </SwiperSlide>
                        )
                    })}
              </Swiper>
            </div>
            
            <div id='section--about'>
              <div className="font-roboto font-light text-lg leading-8 text-desc mb-[50px]">
                <h6 className="text-xl font-poppins font-semibold mb-4">About the Destination</h6>
                <p>Colorful prayer flags fluttering in the wind, experience bustling folk life in Nepal&apos;s capital Kathmandu, enjoy the view of the snow-capped Himalayan mountains from temples, jungles, boats and airplane windows. </p>
                <p>Experience dzongs, temples and unique nature in the unique mountain country of Bhutan with the Tiger&apos;s Nest monastery as the ultimate highlight! Visit the lowlands of Nepal in search of the Bengal tiger and visit the trekking town of Pokhara where we have majestic views of the Annapurna Mountains. There are many highlights on this exciting trip to Nepal and Bhutan!</p>
                <p>Kathmandu is the capital of Nepal, and is the gateway to a unique world of cultural and religious sights. Kathmandu, together with the neighboring cities of Bhaktapur and Patan, is part of UNESCO&apos;s &apos;Kathmandu Valley World Heritage Site&apos; and here there are several exciting temples and buildings worth taking a look at.</p>
              </div>
              <div className='lg:pe-[100px] space-y-[50px]'>
                <MapDestination />
              </div>
            </div>

            {/* Features */}
            <ul className="pt-[50px]">
              {/* List Item */}
              <li className="py-[50px] border-t" id='section--departure'>
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">08 Feb, 2025</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[35px] min-w-[35px] h-[35px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px]'><Image src={PlaneIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <div className="mb-[30px] text-desc text-sm lg:text-base">
                      <h3 className="text-base lg:text-xl font-poppins text-black font-medium mb-2">Departure Oslo</h3>
                      <p>Qatar Airways flies from Kathmandu at 02:15 arriving in Doha at 05:05 local time. The flight to Oslo leaves Doha at 08:20 with arrival in Gardermoen at 13:30.</p>
                      <p>Qatar Airways flies from Kathmandu at 02:15 arriving in Doha at 05:05 local time. The flight to Oslo leaves Doha at 08:20 with arrival in Gardermoen at 13:30.</p>
                    </div> 
                    <div className="flex items-center gap-x-2 lg:gap-x-12 justify-between lg:justify-start gap-y-3">
                      <div>
                        <p className="text-[12px] lg:text-base text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-sm lg:text-xl leading-7 font-roboto font-normal text-black">OSL</h6>
                      </div>
                      <div><Image src={ArrowRightSVG} alt='long arrow right' className='w-[13px] lg:w-[20px]'/></div>
                      <div>
                        <p className="text-[12px] lg:text-base text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-sm lg:text-xl leading-7 font-roboto font-normal text-black">DOH</h6>
                      </div>
                      <div><Image src={ArrowRightSVG} alt='long arrow right' className='w-[13px] lg:w-[20px]'/></div>
                      <div>
                        <p className="text-[12px] lg:text-base text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-sm lg:text-xl leading-7 font-roboto font-normal text-black">KTM</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t" id='section--arrival-hotel'>
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">09 Feb, 2025</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[35px] min-w-[35px] h-[35px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px]'><Image src={HomeIcon} alt="plane" className='w-full h-full' /></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <div className="text-desc mb-[30px] text-desc text-sm lg:text-base">
                      <h3 className="text-base lg:text-xl font-poppins text-black font-medium mb-2">Arrival in Hotel, Kathmandu</h3>
                      <p>After a flight change in Doha, we land in Kathmandu at 09:00. We will be met by our local representative in the arrival hall at the airport. He will be holding a sign with &apos;Thanks for the world&apos; and helps us into a waiting bus that will take us to our hotel. We get the day to ourselves, relax after the flight or take a walk in the exciting streets of the area. Many Tibetans have settled here after fleeing Tibet, and this has left its natural mark on the area. The hotel we are staying at, Tibet International, is also decorated in Tibetan style.</p>
                    </div> 
                    <div>
                      <Image src={Banner_2} alt={'banner'} className='w-full h-auto'/>
                    </div>
                  </div>
                </div>
                <div className="mt-[50px] flex items-center gap-4">
                  <span className='w-[35px] min-w-[35px] h-[35px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px]'><Image src={BedIcon} alt="plane" className='w-full h-full' /></span>
                  <div className="h-full border flex-grow flex gap-3 items-center justify-between border-dark border-opacity-10 rounded-lg p-3 lg:py-3 lg:px-5 bg-white">
                      <h3 className="text-sm lg:text-xl font-poppins text-black font-medium mb-0">The Baagh Ananta Elite</h3>
                      <ul className='flex items-center gap-1'>
                        <li><Image src={StarSVG} alt="Star" className='w-[13px] lg:w-[18px]'/></li>
                        <li><Image src={StarSVG} alt="Star" className='w-[13px] lg:w-[18px]'/></li>
                        <li><Image src={StarSVG} alt="Star" className='w-[13px] lg:w-[18px]'/></li>
                        <li><Image src={StarSVG} alt="Star" className='w-[13px] lg:w-[18px]'/></li>
                        <li><Image src={StarSVG} alt="Star" className='w-[13px] lg:w-[18px]'/></li>
                      </ul>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t" id='section--katmandu-tour'>
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">10 Feb, 2025</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[35px] min-w-[35px] h-[35px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px]'><Image src={MetterIcon} alt="plane" className='w-full h-full' /></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <div className="text-desc mb-[30px] text-desc text-sm lg:text-base">
                      <h3 className="text-base lg:text-xl font-poppins text-black font-medium mb-2">Kathmandu Tour</h3>
                      <p>We have breakfast at the hotel before exploring this adventurous city. Among other things, we will visit Kathmandu Durbar Square, Swayambhunath Stupa, and Patan Durbar Square. Kathmandu Durbar Square has a number of beautiful temples and buildings in the architectural style common to the Newari ethnic group of the Kathmandu Valley.</p>
                      <p>This is the historic place where kings have previously been crowned, and the palace tells a lot about the royal history of the country. In the area, we find the highest temple in Kathmandu Valley, Taleju Bhawani, built as early as 1501 by Ratna Malla, the first king of Kathmandu. We visit the house of the living goddess Kumari, who may poke her head out and beckon us.</p>
                      <p>We end the day&apos;s sightseeing with a trip to Patan Durbar Square. Located in Patan, this square is one of the many World Heritage Sites in Nepal. This is where the King of Patan resided when there were three kingdoms in the Kathmandu Valley. There are several older temples here, such as the Krishna Mandir built only of stone in the 17th century.</p>
                    </div> 
                    <div>
                      <Image src={Banner_3} alt={'banner'} className='w-full h-auto'/>
                    </div>
                  </div>
                </div>
                <div className="mt-[50px] flex items-center gap-4">
                  <span className='w-[35px] min-w-[35px] h-[35px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px]'><Image src={BedIcon} alt="plane" className='w-full h-full' /></span>
                  <div className="h-full border flex-grow flex gap-3 items-center justify-between border-dark border-opacity-10 rounded-lg p-3 lg:py-3 lg:px-5 bg-white">
                      <h3 className="text-sm lg:text-xl font-poppins text-black font-medium mb-0">The Baagh Ananta Elite</h3>
                      <ul className='flex items-center gap-1'>
                        <li><Image src={StarSVG} alt="Star" className='w-[13px] lg:w-[18px]'/></li>
                        <li><Image src={StarSVG} alt="Star" className='w-[13px] lg:w-[18px]'/></li>
                        <li><Image src={StarSVG} alt="Star" className='w-[13px] lg:w-[18px]'/></li>
                        <li><Image src={StarSVG} alt="Star" className='w-[13px] lg:w-[18px]'/></li>
                        <li><Image src={StarSVG} alt="Star" className='w-[13px] lg:w-[18px]'/></li>
                      </ul>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t" id='section--departure-2'>
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">11 Feb, 2025</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[35px] min-w-[35px] h-[35px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px]'><Image src={PlaneIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <div className="text-desc mb-[30px] text-desc text-sm lg:text-base">
                      <h3 className="text-base lg:text-xl font-poppins text-black font-medium mb-2">Departure</h3>
                      <p>Qatar Airways flies from Kathmandu at 02:15 arriving in Doha at 05:05 local time. The flight to Oslo leaves Doha at 08:20 with arrival in Gardermoen at 13:30.</p>
                    </div> 
                    <div className="flex items-center gap-x-2 lg:gap-x-12 justify-between lg:justify-start gap-y-3">
                      <div>
                        <p className="text-[12px] lg:text-base text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-sm lg:text-xl leading-7 font-roboto font-normal text-black">OLS</h6>
                      </div>
                      <div><Image src={ArrowRightSVG} alt='long arrow right' className='w-[13px] lg:w-[20px]'/></div>
                      <div>
                        <p className="text-[12px] lg:text-base text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-sm lg:text-xl leading-7 font-roboto font-normal text-black">DOH</h6>
                      </div>
                      <div><Image src={ArrowRightSVG} alt='long arrow right' className='w-[13px] lg:w-[20px]'/></div>
                      <div>
                        <p className="text-[12px] lg:text-base text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-sm lg:text-xl leading-7 font-roboto font-normal text-black">KTM</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t" id='section--weather'>
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">Weather</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[35px] min-w-[35px] h-[35px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px]'><Image src={CloudIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <ul className="space-y-3">
                      <li className="flex gap-3 items-center font-poppins font-medium text-black">
                        <span className="bg-black w-[28px] min-w-[28px] h-[28px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px] text-white text-[11px] lg:text-xl leading-5 inline-flex items-center justify-center rounded-full">11º</span>
                        <span>Temperature</span>
                      </li>
                      <li className="flex gap-3 items-center font-poppins font-medium text-black">
                        <span className="bg-black w-[28px] min-w-[28px] h-[28px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px] text-white text-[11px] lg:text-xl leading-5 inline-flex items-center justify-center rounded-full">19º</span>
                        <span>High Temperature</span>
                      </li>
                      <li className="flex gap-3 items-center font-poppins font-medium text-black">
                        <span className="bg-black w-[28px] min-w-[28px] h-[28px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px] text-white text-[11px] lg:text-xl leading-5 inline-flex items-center justify-center rounded-full">03º</span>
                        <span>Low Temperature</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t" id='section--map'>
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">Map Destinations</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[35px] min-w-[35px] h-[35px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px]'><Image src={GlobalIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full flex-grow">
                    <Image src={ MapDestinationBanner } alt='map destination' className='w-full'/>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t" id='section--whats-include'>
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">What&apos;s include?</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[35px] min-w-[35px] h-[35px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px]'><Image src={CheckIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <ul className="space-y-3 sm:space-y-0 gap-x-4 gap-y-3 lg:gap-y-6 font-roboto text-[18px] font-light text-black grid sm:grid sm:grid-cols-2">
                      { includes.map(( item, index) => (
                        <li key={item.id ?? index} className='flex gap-3 lg:max-w-[255px]'>
                          <span className='mt-1 min-w-[25px] w-[25px]'>
                            <Image src={item.icon} alt={item.text} />
                          </span>
                          <span>{item.text}</span>
                        </li>
                      )) }
                    </ul>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t" id='section--price-booking'>
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">Price & Booking</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[35px] min-w-[35px] h-[35px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px]'><Image src={DollarIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <ul className="space-y-3 gap-x-4 gap-y-6 font-roboto text-[18px] font-light text-black">
                      { bookings.map(( item, index) => (
                        <li key={item.id ?? index} className='flex flex-wrap justify-between gap-x-3 gap-y-4 lg:items-center border rounded-lg px-3 lg:px-4 py-2 font-normal text-base lg:text-lg'>
                          <div className="flex items-center gap-2">
                            <span className='min-w-[25px] w-[25px]'>
                              <Image src={item.icon} alt={item.text} />
                            </span>
                            <span>{item.text}</span>
                          </div>
                          <span className=''>
                            <span className='rounded-md gap-2 font-inter font-normal text-base lg:text-lg inline-block py-[6px] px-[15px] bg-black text-white'>
                              <span>{item.price}</span>
                            </span>
                          </span>
                        </li>
                      )) }
                    </ul>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant={'default'} className='w-full mt-5 rounded bg-black text-lg'>Book Now</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[750px]">
                          <DialogHeader className='mb-4'>
                            <DialogTitle className='text-center text-lg lg:text-3xl font-medium font-poppins'>Book Now</DialogTitle>
                          </DialogHeader>
                          <div className="grid sm:grid-cols-2 gap-y-2 gap-x-2 lg:gap-x-6">
                            <div className="grid__item">
                                <Input id="first_name" className="text-sm lg:text-lg" placeholder='First Name...' />
                            </div>
                            <div className="grid__item">
                              <Select>
                                <SelectTrigger className="w-full text-sm lg:text-lg rounded-full px-5 h-[45px]">
                                  <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid__item">
                                <Input id="last_name" className="text-sm lg:text-lg" placeholder='Last Name...' />
                            </div>
                            <div className="grid__item">
                                <Input id="number_peoples" className="text-sm lg:text-lg" placeholder='Number of People...' />
                            </div>
                            <div className="grid__item">
                                <Input id="country" className="text-sm lg:text-lg" placeholder='Country...' />
                            </div>
                            <div className="grid__item">
                                <Input id="email" className="text-sm lg:text-lg" placeholder='Email...' />
                            </div>
                            <div className="grid__item">
                                <Input id="address" className="text-sm lg:text-lg" placeholder='Address...' />
                            </div>
                            <div className="grid__item">
                                <Input id="phone" className="text-sm lg:text-lg" placeholder='Phone...' />
                            </div>
                            <div className="grid__item sm:col-span-2">
                              <Textarea placeholder="Message" className='rounded-2xl min-h-[100px] lg:min-h-[165px] text-sm lg:text-lg px-5 py-3 mb-3'/>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit" className='w-full bg-black text-sm lg:text-lg'>Submit Request</Button>
                          </DialogFooter>
                          <hr className='mt-4 lg:mt-3'/>
                          <div className='text-center text-sm lg:text-lg my-3 lg:my-2'>
                            Need support or more details?
                          </div>
                            <Button variant={'outline'} className='w-full text-sm lg:text-lg'>Talk With Us</Button>
                        </DialogContent>
                      </Dialog>
                  </div>
                </div>
                <div className="mt-[50px] flex items-center gap-4">
                  <span className='w-[35px] min-w-[35px] h-[35px] lg:w-[46px] lg:min-w-[46px] lg:h-[46px]'><Image src={PdfIcon} alt="plane" className='w-full h-full' /></span>
                  <div className="h-full border flex-grow flex gap-2 items-center justify-between border-dark border-opacity-10 rounded-lg p-3 lg:py-3 lg:px-5 bg-white">
                      <h3 className="text-sm lg:text-xl font-poppins text-black font-medium mb-0">Program PDF Document</h3>
                      <Button variant={'default'} size={'sm'} className='rounded-md gap-2 font-inter font-normal text-sm lg:text-lg h-auto py-[7px] px-[15px] bg-black'>
                        <svg className='w-[16px] lg:w-[24px]' width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.4312 18.7513C8.9837 18.7513 7.7927 18.7513 6.6812 18.7475C5.13212 18.7565 3.62882 18.2227 2.43236 17.2387C1.2359 16.2548 0.421847 14.8828 0.131578 13.3612C-0.15869 11.8395 0.0931584 10.2642 0.843388 8.90893C1.59362 7.55362 2.79484 6.50388 4.23845 5.942C4.31422 5.91838 4.38271 5.87581 4.43743 5.81832C4.49216 5.76084 4.53132 5.69034 4.5512 5.6135C5.0344 4.12593 5.97656 2.82973 7.24239 1.91101C8.50822 0.992298 10.0326 0.49832 11.5967 0.500004C13.5498 0.498472 15.4271 1.25636 16.8317 2.6135C17.4258 3.18703 17.9197 3.85604 18.2927 4.59275C18.675 5.34741 18.9232 6.16281 19.0262 7.0025C19.0275 7.12089 19.0694 7.23524 19.1449 7.32644C19.2204 7.41764 19.3249 7.48014 19.4409 7.5035C20.627 7.93253 21.6398 8.73842 22.3242 9.79781C23.0086 10.8572 23.3271 12.1117 23.2307 13.3693C23.1235 14.6642 22.5969 15.8889 21.7307 16.8575C20.8814 17.8102 19.7288 18.4398 18.4682 18.6395C17.9674 18.7074 17.4623 18.7384 16.9569 18.7325C16.7252 18.7325 16.4859 18.7393 16.2489 18.749H13.2864L10.4312 18.7513ZM8.96195 10.4533C8.7167 10.4533 8.51195 10.4533 8.32745 10.4533C8.16178 10.4465 7.99812 10.4915 7.85916 10.5819C7.72021 10.6723 7.61284 10.8038 7.55195 10.958C7.47944 11.1077 7.45736 11.2769 7.48899 11.4402C7.52063 11.6035 7.60428 11.7522 7.72745 11.864C8.9912 13.139 10.0449 14.189 11.0447 15.1813C11.1988 15.341 11.41 15.433 11.6319 15.437C11.849 15.4329 12.0557 15.3435 12.2072 15.188C13.2729 14.1313 14.3642 13.0423 15.5424 11.852C15.6714 11.7272 15.7541 11.5622 15.7768 11.3842C15.7996 11.2062 15.7611 11.0257 15.6677 10.8725C15.5944 10.7392 15.4854 10.629 15.3529 10.5543C15.2204 10.4795 15.0697 10.4433 14.9177 10.4495H13.2909V7.18025C13.3014 6.79726 13.1788 6.42249 12.944 6.11973C12.7092 5.81697 12.3767 5.60495 12.0032 5.51975C11.8757 5.49073 11.7454 5.47589 11.6147 5.4755C11.2906 5.47921 10.9746 5.57769 10.7058 5.75881C10.437 5.93993 10.2271 6.19576 10.1019 6.49475C10.0884 6.56525 10.0734 6.635 10.0592 6.7025C10.0138 6.88185 9.98614 7.06524 9.9767 7.25C9.9677 7.95425 9.96845 8.67125 9.96995 9.3635V10.2313C9.96995 10.2823 9.96995 10.3325 9.96245 10.3858C9.96245 10.409 9.96245 10.4323 9.95795 10.4555H9.4502L8.96195 10.4533Z" fill="currentColor"/>
                        </svg>
                        <span>Download</span>
                      </Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-4 sticky top-[100px] z-10">
              <div className=" border border-dark border-opacity-10 rounded-lg p-3 lg:p-6 bg-white">
                  <div className="flex justify-between items-center gap-x-3">
                      <h2 className="text-dark text-xl font-poppins font-medium">Itinerary</h2>
                      <Link href={'#'} className='text-lg font-poppins font-normal flex items-center gap-x-2'>
                          <Image src={ShareSVG} alt="Share" />
                          <span>Share</span>
                      </Link>
                  </div>
                  <hr className="my-3" />
                  <div className="">
                      <ul className="space-y-3 font-roboto text-[18px] font-normal text-black">
                      {itinerary.map((item, index) => (
                        <li key={item.id ?? index}>
                          <ScrollLink
                            to={item.url} 
                            spy={true} 
                            smooth={true} 
                            duration={100} 
                            offset={-100} // Adjust the offset as needed
                            className='flex items-center gap-2 border py-2 px-4 rounded-lg itinerary-link cursor-pointer'
                          >
                            <span>
                            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="1">
                              <path d="M12.4217 24.0749C10.6103 24.0748 8.8237 23.6526 7.20377 22.842C5.58383 22.0313 4.17505 20.8543 3.08911 19.4045C2.00317 17.9546 1.26997 16.2717 0.947603 14.4891C0.625232 12.7066 0.722617 10.8734 1.23197 9.13504C1.74131 7.39667 2.64866 5.80089 3.88205 4.47419C5.11544 3.14748 6.64087 2.12637 8.33756 1.49181C10.0342 0.857251 11.8555 0.6267 13.6568 0.818439C15.4581 1.01018 17.1899 1.61889 18.715 2.59639C18.8917 2.71158 19.0168 2.891 19.0637 3.09668C19.0966 3.25073 19.0833 3.41107 19.0252 3.55751C18.9672 3.70396 18.8671 3.82994 18.7376 3.9196C18.6081 4.00927 18.4549 4.05861 18.2974 4.06137C18.1399 4.06414 17.985 4.02023 17.8524 3.93517C15.9691 2.73058 13.7384 2.18719 11.5121 2.39072C9.28571 2.59425 7.19044 3.53309 5.55673 5.05921C3.92303 6.58532 2.84385 8.61186 2.48935 10.8192C2.13485 13.0265 2.52519 15.2891 3.59888 17.25C4.67257 19.2109 6.36847 20.7586 8.41913 21.649C10.4698 22.5394 12.7585 22.7219 14.9243 22.1676C17.0901 21.6133 19.0099 20.3538 20.3807 18.5877C21.7515 16.8217 22.4953 14.6495 22.495 12.4139C22.495 12.0824 22.4762 11.7524 22.4462 11.4307C22.438 11.3267 22.4484 11.222 22.477 11.1216C22.5082 11.0213 22.5593 10.9282 22.627 10.8479C22.6952 10.7674 22.7781 10.7007 22.8715 10.6514C22.9623 10.6024 23.062 10.5721 23.1647 10.5622C23.2697 10.552 23.3757 10.5625 23.4767 10.5929C23.5756 10.6245 23.6671 10.6754 23.746 10.7429C23.8278 10.8078 23.8946 10.8897 23.9417 10.9829C23.9906 11.0763 24.0217 11.1781 24.0333 11.2829C24.0698 11.6574 24.088 12.0366 24.088 12.4206C24.0846 15.5126 22.8546 18.477 20.668 20.663C18.4813 22.8491 15.5167 24.0783 12.4247 24.0809L12.4217 24.0749Z" fill="currentColor"/>
                              <path d="M13.7485 15.0653C13.6435 15.0652 13.5395 15.0446 13.4424 15.0045C13.3467 14.9636 13.2595 14.9051 13.1853 14.832L8.41446 10.0613C8.34213 9.98649 8.28415 9.89904 8.24344 9.80329C8.20311 9.70697 8.18237 9.60358 8.18237 9.49915C8.18237 9.39473 8.20311 9.29134 8.24344 9.19502C8.28413 9.09926 8.34212 9.01181 8.41446 8.93702C8.48843 8.864 8.57546 8.8055 8.67099 8.76453C8.86676 8.6839 9.08642 8.6839 9.2822 8.76453C9.37881 8.80389 9.46637 8.86258 9.53946 8.93702L13.7478 13.1453L24.8477 2.04525C24.9212 1.97091 25.0089 1.91199 25.1054 1.87194C25.202 1.83189 25.3057 1.81153 25.4102 1.81202C25.5674 1.81224 25.721 1.85901 25.8516 1.94642C25.9822 2.03383 26.0841 2.15795 26.1443 2.30316C26.2045 2.44836 26.2202 2.60815 26.1897 2.76234C26.1592 2.91652 26.0837 3.05819 25.9727 3.16952L14.3155 14.8268C14.2401 14.9011 14.1505 14.9594 14.0522 14.9985C13.9573 15.0386 13.8553 15.059 13.7523 15.0585L13.7485 15.0653Z" fill="currentColor"/>
                              </g>
                            </svg>
                            </span>
                            <span>{item.text}</span>
                          </ScrollLink>
                        </li>
                      ))}
                      </ul>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tour;