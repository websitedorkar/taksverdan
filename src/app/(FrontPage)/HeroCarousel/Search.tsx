
"use client";

import React, { useEffect, useState } from 'react';
import Search_SVG from '@/images/icon-search.svg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
  } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"

import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from '@/hooks/use-media-query';

  import { locations, tours } from './data';

const Search = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className='mb-3'>
        <div className="flex items-stretch flex-col gap-y-6 md:grid md:grid-cols-[1fr_1fr_64px]">
            
            {/* Location */}
            <div className='bg-white text-dark ps-8 p-[7px] flex flex-col min-h-[58px] justify-center w-full rounded-full md:rounded-r-none'>
              <label className='block text-[16px] font-roboto text-dark' htmlFor="form-label--location">From</label>
              <LocationSearch />
            </div>

            {/* Tour */}
            {
              isMobile ? 
              <div className="bg-white text-dark p-[7px] md:p-[10px] w-full min-h-[58px] flex items-center gap-x-3 rounded-full md:rounded-l-none relative before:content-[''] before:w-[1px] before:h-[60%] before:bg-black/20 before:absolute before:top-1/2 before:-translate-y-1/2 before:start-0">
                <div className='ps-6'>
                    <label className='block text-[16px] font-roboto text-dark' htmlFor="form-label--tour">Tour</label>
                    <TourSearch />
                  </div>
                <div className='inline-flex items-center ms-auto'>
                    <Button variant={'secondary'} size={'default'} className='p-0 h-auto'>
                        <Image src={Search_SVG} alt='Search Now' className='w-[51px] h-[51px] md:w-[58px] md:h-[58px]'/>
                    </Button>
                </div>
              </div>
              :
              <React.Fragment>
                <div className="bg-white text-dark p-[7px] md:p-[10px] w-full min-h-[58px] flex items-center gap-x-3 relative before:content-[''] before:w-[1px] before:h-[60%] before:bg-black/20 before:absolute before:top-1/2 before:-translate-y-1/2 before:start-0">
                  <div className='ps-6'>
                      <label className='block text-[16px] font-roboto text-dark' htmlFor="form-label--tour">Tour</label>
                      <TourSearch />
                    </div>
                </div>
                <div className='inline-flex items-center bg-white rounded-full md:rounded-l-none'>
                    <Button variant={'secondary'} size={'default'} className='p-0 h-auto'>
                        <Image src={Search_SVG} alt='Search Now' className='w-[51px] h-[51px] md:w-[58px] md:h-[58px]'/>
                    </Button>
                </div>
              </React.Fragment>
            }
        </div>
    </div>
  )
}
export default Search;

export const LocationSearch = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

  return(
    <div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={`w-full justify-between !py-0 px-0 h-auto rounded-none border-none
            ${ value ? 'text-dark' : "text-dark/50" }
            bg-transparen hover:bg-transparent hover:text-dark`}
          >
            { value ? locations.find((location) => location.value === value)?.label : "Choose Location" }
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 min-w-[260px]"  align="start">
          <Command>
            <CommandInput placeholder="Type location..." />
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandList>
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem
                  key={location.value}
                  value={location.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === location.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {location.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          </Command>
        </PopoverContent>
  
        </Popover>
    </div>
  )
}

export const TourSearch = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

  return(
    <div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={`w-full justify-between !py-0 px-0 h-auto rounded-none border-none
            ${ value ? 'text-dark' : "text-dark/50" }
            bg-transparen hover:bg-transparent hover:text-dark`}
          >
          { value ? tours.find((tour) => tour.value === value)?.label : "Choose Tour" }
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 min-w-[260px]" align="start">
          <Command>
            <CommandInput placeholder="Type tour..." />
            <CommandEmpty>No tour found.</CommandEmpty>
            <CommandList>
            <CommandGroup>
              {tours.map((tour) => (
                <CommandItem
                  key={tour.value}
                  value={tour.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === tour.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {tour.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          </Command>
        </PopoverContent>
  
        </Popover>
    </div>
  )
}