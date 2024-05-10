"use client";
import React from 'react'
import PlaneIcon from '@/images/plane.svg';
import HomeIcon from '@/images/home.svg';
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
import MapDestination from './img/map-destinations.png';
import CheckCircle from './img/check-circle.svg';
import ShareSVG from './img/share.svg';
import StarSVG from '@/images/star.svg';
import ArrowRightSVG from '@/images/long-arrow-right.svg';
import MapMarker from './img/map-marker.svg';
import Map from './img/map.svg';
import Image from 'next/image';
import { Textarea } from "@/components/ui/textarea"
import { bookings, includes, itinerary, slides } from './data';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

// Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';

const Tour = () => {
  return (
    <section className='py-[50px] relative z-[1] before:bg-[bottom_center] before:bg-cover before:w-full before:h-screen before:absolute before:bg-white before:top-0 before:z-[-1] before:bg-hero-pattern'>
      <div className="container-fluid">
            
          {/* Section Title */}
          <div className="mb-[20px]">
              <h2 className='text-xl lg:text-2xl font-poppins font-semibold mb-1'>Group Tour: Lakehouse Pier Lake</h2> 
              <div className='flex items-center gap-2 text-sm lg:text-lg font-poppins font-regular'><Image src={MapMarker} alt='map' />Katmandu, Nepal</div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <div className="relative rounded-[1.25rem] overflow-hidden bg-slate-100 hero-pagination mb-[50px]">
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

            <div className="font-roboto font-light text-lg leading-8 text-desc mb-[50px]">
              <h6 className="text-xl font-poppins font-semibold mb-4">About the Destination</h6>
              <p>Colorful prayer flags fluttering in the wind, experience bustling folk life in Nepal&apos;s capital Kathmandu, enjoy the view of the snow-capped Himalayan mountains from temples, jungles, boats and airplane windows. </p>
              <p>Experience dzongs, temples and unique nature in the unique mountain country of Bhutan with the Tiger&apos;s Nest monastery as the ultimate highlight! Visit the lowlands of Nepal in search of the Bengal tiger and visit the trekking town of Pokhara where we have majestic views of the Annapurna Mountains. There are many highlights on this exciting trip to Nepal and Bhutan!</p>
              <p>Kathmandu is the capital of Nepal, and is the gateway to a unique world of cultural and religious sights. Kathmandu, together with the neighboring cities of Bhaktapur and Patan, is part of UNESCO&apos;s &apos;Kathmandu Valley World Heritage Site&apos; and here there are several exciting temples and buildings worth taking a look at.</p>
            </div>
            <div className='pe-[100px]'>
              <Image src={Map} alt={'map'} />
            </div>

            {/* Features */}
            <ul className="">
              {/* List Item */}
              <li className="py-[50px] border-t">
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">08 Feb, 2025</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[46px] min-w-[46px] h-[46px]'><Image src={PlaneIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <div className="mb-[30px] text-desc">
                      <h3 className="text-xl font-poppins text-black font-medium mb-2">Departure Oslo</h3>
                      <p>Qatar Airways flies from Kathmandu at 02:15 arriving in Doha at 05:05 local time. The flight to Oslo leaves Doha at 08:20 with arrival in Gardermoen at 13:30.</p>
                      <p>Qatar Airways flies from Kathmandu at 02:15 arriving in Doha at 05:05 local time. The flight to Oslo leaves Doha at 08:20 with arrival in Gardermoen at 13:30.</p>
                    </div> 
                    <div className="flex items-center gap-x-12 gap-y-3">
                      <div>
                        <p className="text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-xl leading-7 font-roboto font-normal text-black">OSL</h6>
                      </div>
                      <div><Image src={ArrowRightSVG} alt='long arrow right' /></div>
                      <div>
                        <p className="text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-xl leading-7 font-roboto font-normal text-black">DOH</h6>
                      </div>
                      <div><Image src={ArrowRightSVG} alt='long arrow right' /></div>
                      <div>
                        <p className="text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-xl leading-7 font-roboto font-normal text-black">KTM</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t">
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">09 Feb, 2025</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[46px] min-w-[46px] h-[46px]'><Image src={HomeIcon} alt="plane" className='w-full h-full' /></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <div className="mb-[30px] text-desc">
                      <h3 className="text-xl font-poppins text-black font-medium mb-2">Arrival in Hotel, Kathmandu</h3>
                      <p>After a flight change in Doha, we land in Kathmandu at 09:00. We will be met by our local representative in the arrival hall at the airport. He will be holding a sign with &apos;Thanks for the world&apos; and helps us into a waiting bus that will take us to our hotel. We get the day to ourselves, relax after the flight or take a walk in the exciting streets of the area. Many Tibetans have settled here after fleeing Tibet, and this has left its natural mark on the area. The hotel we are staying at, Tibet International, is also decorated in Tibetan style.</p>
                    </div> 
                    <div>
                      <Image src={Banner_2} alt={'banner'} className='w-full h-auto'/>
                    </div>
                  </div>
                </div>
                <div className="mt-[50px] flex items-center gap-4">
                  <span className='w-[46px] min-w-[46px] h-[46px]'><Image src={BedIcon} alt="plane" className='w-full h-full' /></span>
                  <div className="h-full border flex-grow flex gap-3 items-center justify-between border-dark border-opacity-10 rounded-lg p-3 lg:py-3 lg:px-5 bg-white">
                      <h3 className="text-xl font-poppins text-black font-medium mb-0">The Baagh Ananta Elite</h3>
                      <ul className='flex items-center gap-1'>
                        <li><Image src={StarSVG} alt="Star" /></li>
                        <li><Image src={StarSVG} alt="Star" /></li>
                        <li><Image src={StarSVG} alt="Star" /></li>
                        <li><Image src={StarSVG} alt="Star" /></li>
                        <li><Image src={StarSVG} alt="Star" /></li>
                      </ul>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t">
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">10 Feb, 2025</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[46px] min-w-[46px] h-[46px]'><Image src={HomeIcon} alt="plane" className='w-full h-full' /></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <div className="mb-[30px] text-desc">
                      <h3 className="text-xl font-poppins text-black font-medium mb-2">Kathmandu Tour</h3>
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
                  <span className='w-[46px] min-w-[46px] h-[46px]'><Image src={BedIcon} alt="plane" className='w-full h-full' /></span>
                  <div className="h-full border flex-grow flex gap-3 items-center justify-between border-dark border-opacity-10 rounded-lg p-3 lg:py-3 lg:px-5 bg-white">
                      <h3 className="text-xl font-poppins text-black font-medium mb-0">The Baagh Ananta Elite</h3>
                      <ul className='flex items-center gap-1'>
                        <li><Image src={StarSVG} alt="Star" /></li>
                        <li><Image src={StarSVG} alt="Star" /></li>
                        <li><Image src={StarSVG} alt="Star" /></li>
                        <li><Image src={StarSVG} alt="Star" /></li>
                        <li><Image src={StarSVG} alt="Star" /></li>
                      </ul>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t">
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">11 Feb, 2025</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[46px] min-w-[46px] h-[46px]'><Image src={PlaneIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <div className="mb-[30px] text-desc">
                      <h3 className="text-xl font-poppins text-black font-medium mb-2">Departure</h3>
                      <p>Qatar Airways flies from Kathmandu at 02:15 arriving in Doha at 05:05 local time. The flight to Oslo leaves Doha at 08:20 with arrival in Gardermoen at 13:30.</p>
                    </div> 
                    <div className="flex items-center gap-x-12 gap-y-3">
                      <div>
                        <p className="text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-xl leading-7 font-roboto font-normal text-black">OLS</h6>
                      </div>
                      <div><Image src={ArrowRightSVG} alt='long arrow right' /></div>
                      <div>
                        <p className="text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-xl leading-7 font-roboto font-normal text-black">DOH</h6>
                      </div>
                      <div><Image src={ArrowRightSVG} alt='long arrow right' /></div>
                      <div>
                        <p className="text-black text-opacity-40 font-roboto font-light mb-0">Airport</p>
                        <h6 className="text-xl leading-7 font-roboto font-normal text-black">KTM</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t">
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">Weather</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[46px] min-w-[46px] h-[46px]'><Image src={CloudIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <ul className="space-y-3">
                      <li className="flex gap-3 items-center font-poppins font-medium text-black">
                        <span className="bg-black w-[46px] min-w-[46px] h-[46px] text-white text-xl leading-5 inline-flex items-center justify-center rounded-full">11º</span>
                        <span>Temperature</span>
                      </li>
                      <li className="flex gap-3 items-center font-poppins font-medium text-black">
                        <span className="bg-black w-[46px] min-w-[46px] h-[46px] text-white text-xl leading-5 inline-flex items-center justify-center rounded-full">19º</span>
                        <span>High Temperature</span>
                      </li>
                      <li className="flex gap-3 items-center font-poppins font-medium text-black">
                        <span className="bg-black w-[46px] min-w-[46px] h-[46px] text-white text-xl leading-5 inline-flex items-center justify-center rounded-full">03º</span>
                        <span>Low Temperature</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t">
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">Map Destinations</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[46px] min-w-[46px] h-[46px]'><Image src={GlobalIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full flex-grow">
                    <Image src={ MapDestination } alt='map destination' className='w-full'/>
                  </div>
                </div>
              </li>
              {/* List Item */}
              <li className="py-[50px] border-t">
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">What&apos;s include?</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[46px] min-w-[46px] h-[46px]'><Image src={CheckIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <ul className="space-y-3 sm:space-y-0 gap-x-4 gap-y-6 font-roboto text-[18px] font-light text-black grid sm:grid sm:grid-cols-2">
                      { includes.map(( item, index) => (
                        <li key={item.id ?? index} className='flex gap-3 max-w-[255px]'>
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
              <li className="py-[50px] border-t">
                <h6 className="text-xl font-poppins font-medium text-black mb-[25px]">Price & Booking</h6>
                <div className="flex items-start gap-4">
                  <span className='w-[46px] min-w-[46px] h-[46px]'><Image src={DollarIcon} alt="plane" className='w-full h-full'/></span>
                  <div className="h-full border flex-grow border-dark border-opacity-10 rounded-lg p-3 lg:p-4 lg:px-5 bg-white">
                    <ul className="space-y-3 gap-x-4 gap-y-6 font-roboto text-[18px] font-light text-black">
                      { bookings.map(( item, index) => (
                        <li key={item.id ?? index} className='flex gap-x-3 gap-y-4 items-center border rounded-lg px-3 lg:px-4 py-2 font-normal text-lg'>
                          <span className='min-w-[25px] w-[25px]'>
                            <Image src={item.icon} alt={item.text} />
                          </span>
                          <span>{item.text}</span>
                          <span className='ms-auto'>
                            <Button variant={'default'} size={'sm'} className='rounded-md gap-2 font-inter font-normal text-lg h-auto py-[6px] px-[15px] bg-black'>
                              <span>{item.price}</span>
                            </Button>
                          </span>
                        </li>
                      )) }
                    </ul>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant={'default'} className='w-full mt-5 rounded bg-black text-lg'>Book Now</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[750px] lg:p-7">
                          <DialogHeader className='mb-4'>
                            <DialogTitle className='text-center text-3xl font-medium font-poppins'>Book Now</DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="grid__item">
                                <Input id="first_name" className="text-lg" placeholder='First Name...' />
                            </div>
                            <div className="grid__item">
                              <Select>
                                <SelectTrigger className="w-full text-lg rounded-full px-5 h-[45px]">
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
                                <Input id="last_name" className="text-lg" placeholder='Last Name...' />
                            </div>
                            <div className="grid__item">
                                <Input id="number_peoples" className="text-lg" placeholder='Number of People...' />
                            </div>
                            <div className="grid__item">
                                <Input id="country" className="text-lg" placeholder='Country...' />
                            </div>
                            <div className="grid__item">
                                <Input id="email" className="text-lg" placeholder='Email...' />
                            </div>
                            <div className="grid__item">
                                <Input id="address" className="text-lg" placeholder='Address...' />
                            </div>
                            <div className="grid__item">
                                <Input id="phone" className="text-lg" placeholder='Phone...' />
                            </div>
                            <div className="grid__item col-span-2">
                              <Textarea placeholder="Message" className='rounded-2xl min-h-[165px] text-lg px-5 py-3 mb-3'/>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit" className='w-full bg-black text-lg'>Submit Request</Button>
                          </DialogFooter>
                          <hr className='mt-3'/>
                          <div className='text-center text-lg my-2'>
                            Need support or more details?
                          </div>
                            <Button variant={'outline'} className='w-full text-lg'>Talk With Us</Button>
                        </DialogContent>
                      </Dialog>
                  </div>
                </div>
                <div className="mt-[50px] flex items-center gap-4">
                  <span className='w-[46px] min-w-[46px] h-[46px]'><Image src={PdfIcon} alt="plane" className='w-full h-full' /></span>
                  <div className="h-full border flex-grow flex gap-3 items-center justify-between border-dark border-opacity-10 rounded-lg p-3 lg:py-3 lg:px-5 bg-white">
                      <h3 className="text-xl font-poppins text-black font-medium mb-0">Program PDF Document</h3>
                      <Button variant={'default'} size={'sm'} className='rounded-md gap-2 font-inter font-normal text-lg h-auto py-[6px] px-[15px] bg-black'>
                        <Image src={IconCloud} alt="Share" />                        
                        <span>Download</span>
                      </Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
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
                        { itinerary.map(( item, index) => (
                          <li key={item.id ?? index} className='flex items-center gap-2 border py-2 px-4 rounded-lg'>
                            <span>
                              <Image src={item.icon} alt={item.text} />
                            </span>
                            <span>{item.text}</span>
                          </li>
                        )) }
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