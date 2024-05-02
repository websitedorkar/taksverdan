
// "use client";

// import React, { useState } from "react";
// import { Check, ChevronsUpDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Input } from "@/components/ui/input";

// export interface Framework {
//   value: string;
//   label: string;
// }

// export const frameworks: Framework[] = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ];

// const Search: React.FC = () => {
//     const [open, setOpen] = useState<boolean>(false);
//     const [value, setValue] = useState<string>('');

//   return (
//     // <Popover open={open} onOpenChange={setOpen}>
//     //   <PopoverTrigger asChild>
//     //     <Button
//     //       variant="outline"
//     //       role="combobox"
//     //       aria-expanded={open}
//     //       className="w-[200px] justify-between"
//     //     >
//     //       {value
//     //         ? frameworks.find((framework) => framework.value === value)?.label
//     //         : "Select framework..."}
//     //       <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//     //     </Button>
//     //   </PopoverTrigger>
//     //   <PopoverContent className="w-[200px] p-0">
//     //     {[ // Enclose the children within an array
//     //       <Command key="command">
//     //         <CommandInput placeholder="Search framework..." />
//     //         <CommandEmpty>No framework found.</CommandEmpty>
//     //         <CommandGroup>
//     //           {frameworks.map((framework) => (
//     //             <CommandItem
//     //               key={framework.value}
//     //               value={framework.value}
//     //               onSelect={(currentValue) => {
//     //                 setValue(currentValue === value ? "" : currentValue);
//     //                 setOpen(false);
//     //               }}
//     //             >
//     //               <Check
//     //                 className={
//     //                   value === framework.value
//     //                     ? "mr-2 h-4 w-4 opacity-100"
//     //                     : "mr-2 h-4 w-4 opacity-0"
//     //                 }
//     //               />
//     //               { framework.label }
//     //             </CommandItem>
//     //           ))}
//     //         </CommandGroup>
//     //       </Command>
//     //     ]} // Close the array
//     //   </PopoverContent>

//     // </Popover>
    
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button variant="outline">Open popover</Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-80">
//         <div className="grid gap-4">
//           <div className="space-y-2">
//             <h4 className="font-medium leading-none">Dimensions</h4>
//             <p className="text-sm text-muted-foreground">
//               Set the dimensions for the layer.
//             </p>
//           </div>
//           <div className="grid gap-2">
//             <div className="grid grid-cols-3 items-center gap-4">
//               <label htmlFor="width">Width</label>
//               <Input
//                 id="width"
//                 defaultValue="100%"
//                 className="col-span-2 h-8"
//               />
//             </div>
//             <div className="grid grid-cols-3 items-center gap-4">
//               <label htmlFor="maxWidth">Max. width</label>
//               <Input
//                 id="maxWidth"
//                 defaultValue="300px"
//                 className="col-span-2 h-8"
//               />
//             </div>
//             <div className="grid grid-cols-3 items-center gap-4">
//               <label htmlFor="height">Height</label>
//               <Input
//                 id="height"
//                 defaultValue="25px"
//                 className="col-span-2 h-8"
//               />
//             </div>
//             <div className="grid grid-cols-3 items-center gap-4">
//               <label htmlFor="maxHeight">Max. height</label>
//               <Input
//                 id="maxHeight"
//                 defaultValue="none"
//                 className="col-span-2 h-8"
//               />
//             </div>
//           </div>
//         </div>
//       </PopoverContent>
//     </Popover>

//   );
// };

// export default Search;





"use client";

import React, { useEffect, useState } from 'react';
import Search_SVG from '@/images/icon-search.svg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { Check, ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
 

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
            <div><SearchTour /></div>
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



const SearchTour: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  interface Framework {
    value: string;
    label: string;
  }

  const frameworks: Framework[] = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]

  return (
    <div>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
        {value
          ? frameworks.find((framework) => framework.value === value)?.label
          : "Select tour..."}
        </Button>
        {/* <Label htmlFor="form-label--tour">Tour</Label> */}
        {/* <Label className='block text-[16px] text-dark'>Tour</Label> */}
        {/* <Input
            type='text'
            id='form-label--tour'
            onFocus={() => setOpen(true)}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='border-none shadow-none outline-none bg-transparent text-[18px] font-roboto placeholder:text-dark/50'
            placeholder='Choose Tour'
        /> */}

      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 shadow-none border-none bg-transparent">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {framework.label}
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