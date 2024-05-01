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
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"

  

const Search = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
          if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpen((open) => !open)
          }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
      }, []);

  return (
    <div className='bg-white text-dark p-[6px] rounded-full mb-3'>
        <div className="grid grid-cols-[1fr_1fr_60px] items-center">
            <div>Lorem ipsum dolor sit amet.</div>
            <div>
                
                
                <input
                    type='text'
                    onFocus={() => setOpen(true)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='border-none shadow-none outline-none bg-transparent w-full lg:w-auto lg:min-w-[140px] lg:max-w-[140px] transition-all ease-linear duration-200 focus:lg:min-w-[200px] focus:lg:max-w-[200px]'
                    placeholder='Search course...'
                />
                        
                <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                        <Smile className="mr-2 h-4 w-4" />
                        <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                        <Calculator className="mr-2 h-4 w-4" />
                        <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                    </CommandList>
                </CommandDialog>


        
                </div>
            <div className='inline-flex items-center'>
                <Button variant={'secondary'} size={'default'} className='p-0 h-auto'>
                    <Image src={Search_SVG} alt='Search Now' className='w-[58px] h-[58px]'/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Search;