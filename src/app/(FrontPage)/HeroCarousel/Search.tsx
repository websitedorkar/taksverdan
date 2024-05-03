
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

  import { locations, tours } from './data';

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
        <div className="grid grid-cols-[1fr_1px_1fr_60px] items-center">
            <div className='ps-6'>
              <label className='block text-[16px] font-roboto text-dark' htmlFor="form-label--location">From</label>
              <LocationSearch />
            </div>
            <div className='w-[1px] h-[80%] bg-black/20'></div>
            <div className='ps-6'>
                <label className='block text-[16px] font-roboto text-dark' htmlFor="form-label--tour">Tour</label>
                <TourSearch />
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
        <PopoverContent className="w-full p-0">
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
        <PopoverContent className="w-full p-0">
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

// "use client"
 
// import React, { useState } from "react";
// import { Check, ChevronsUpDown } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
 

// export interface Framework {
//   value: string;
//   label: string;
// }

// export const frameworks: Framework[] = [
//   {
//     value: "tour-1",
//     label: "Tour 1",
//   },
//   {
//     value: "tour-2",
//     label: "Tour 2",
//   },
//   {
//     value: "tour-3",
//     label: "Tour 3",
//   },
//   {
//     value: "tour-4",
//     label: "Tour 4",
//   },
//   {
//     value: "tour-5",
//     label: "Tour 5",
//   },
// ]

// const Search = () => {
//   const [open, setOpen] = useState<boolean>(false);
//   const [value, setValue] = useState<string>('');
//   return (
//     <div>
      
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between bg-transparent"
//         >
//           { value ? frameworks.find((framework) => framework.value === value)?.label : "Choose Tour" }
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command>
//           <CommandInput placeholder="Type tour..." />
//           <CommandEmpty>No framework found.</CommandEmpty>
//           <CommandList>
//           <CommandGroup>
//             {frameworks.map((framework) => (
//               <CommandItem
//                 key={framework.value}
//                 value={framework.value}
//                 onSelect={(currentValue) => {
//                   setValue(currentValue === value ? "" : currentValue)
//                   setOpen(false)
//                 }}
//               >
//                 <Check
//                   className={cn(
//                     "mr-2 h-4 w-4",
//                     value === framework.value ? "opacity-100" : "opacity-0"
//                   )}
//                 />
//                 {framework.label}
//               </CommandItem>
//             ))}
//           </CommandGroup>
//         </CommandList>
//         </Command>
//       </PopoverContent>

//       </Popover>
//     </div>
//   )
// }

// export default Search;

// // "use client"
 
// // import * as React from "react"
// // import { Check, ChevronsUpDown } from "lucide-react"
 
// // import { cn } from "@/lib/utils"
// // import { Button } from "@/components/ui/button"
// // import {
// //   Command,
// //   CommandEmpty,
// //   CommandGroup,
// //   CommandInput,
// //   CommandItem,
// // } from "@/components/ui/command"
// // import {
// //   Popover,
// //   PopoverContent,
// //   PopoverTrigger,
// // } from "@/components/ui/popover"
 
// // const frameworks = [
// //   {
// //     value: "next.js",
// //     label: "Next.js",
// //   },
// //   {
// //     value: "sveltekit",
// //     label: "SvelteKit",
// //   },
// //   {
// //     value: "nuxt.js",
// //     label: "Nuxt.js",
// //   },
// //   {
// //     value: "remix",
// //     label: "Remix",
// //   },
// //   {
// //     value: "astro",
// //     label: "Astro",
// //   },
// // ]
 
// // export function Search() {
// //   const [open, setOpen] = React.useState(false)
// //   const [value, setValue] = React.useState("")
 
// //   return (
// //     <Popover open={open} onOpenChange={setOpen}>
// //       <PopoverTrigger asChild>
// //         <Button
// //           variant="outline"
// //           role="combobox"
// //           aria-expanded={open}
// //           className="w-[200px] justify-between"
// //         >
// //           {value
// //             ? frameworks.find((framework) => framework.value === value)?.label
// //             : "Select framework..."}
// //           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
// //         </Button>
// //       </PopoverTrigger>
// //       <PopoverContent className="w-[200px] p-0">
// //         <Command>
// //           <CommandInput placeholder="Search framework..." />
// //           <CommandEmpty>No framework found.</CommandEmpty>
// //           <CommandGroup>
// //             {frameworks.map((framework) => (
// //               <CommandItem
// //                 key={framework.value}
// //                 value={framework.value}
// //                 onSelect={(currentValue) => {
// //                   setValue(currentValue === value ? "" : currentValue)
// //                   setOpen(false)
// //                 }}
// //               >
// //                 <Check
// //                   className={cn(
// //                     "mr-2 h-4 w-4",
// //                     value === framework.value ? "opacity-100" : "opacity-0"
// //                   )}
// //                 />
// //                 {framework.label}
// //               </CommandItem>
// //             ))}
// //           </CommandGroup>
// //         </Command>
// //       </PopoverContent>
// //     </Popover>
// //   )
// // }





// // // "use client";

// // // import React, { useState } from "react";
// // // import { Check, ChevronsUpDown } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
// // // import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// // // import { Input } from "@/components/ui/input";

// // // export interface Framework {
// // //   value: string;
// // //   label: string;
// // // }

// // // export const frameworks: Framework[] = [
// // //   {
// // //     value: "next.js",
// // //     label: "Next.js",
// // //   },
// // //   {
// // //     value: "sveltekit",
// // //     label: "SvelteKit",
// // //   },
// // //   {
// // //     value: "nuxt.js",
// // //     label: "Nuxt.js",
// // //   },
// // //   {
// // //     value: "remix",
// // //     label: "Remix",
// // //   },
// // //   {
// // //     value: "astro",
// // //     label: "Astro",
// // //   },
// // // ];

// // // const Search: React.FC = () => {
// // //     const [open, setOpen] = useState<boolean>(false);
// // //     const [value, setValue] = useState<string>('');

// // //   return (
// // //     // <Popover open={open} onOpenChange={setOpen}>
// // //     //   <PopoverTrigger asChild>
// // //     //     <Button
// // //     //       variant="outline"
// // //     //       role="combobox"
// // //     //       aria-expanded={open}
// // //     //       className="w-[200px] justify-between"
// // //     //     >
// // //     //       {value
// // //     //         ? frameworks.find((framework) => framework.value === value)?.label
// // //     //         : "Select framework..."}
// // //     //       <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
// // //     //     </Button>
// // //     //   </PopoverTrigger>
// // //     //   <PopoverContent className="w-[200px] p-0">
// // //     //     {[ // Enclose the children within an array
// // //     //       <Command key="command">
// // //     //         <CommandInput placeholder="Search framework..." />
// // //     //         <CommandEmpty>No framework found.</CommandEmpty>
// // //     //         <CommandGroup>
// // //     //           {frameworks.map((framework) => (
// // //     //             <CommandItem
// // //     //               key={framework.value}
// // //     //               value={framework.value}
// // //     //               onSelect={(currentValue) => {
// // //     //                 setValue(currentValue === value ? "" : currentValue);
// // //     //                 setOpen(false);
// // //     //               }}
// // //     //             >
// // //     //               <Check
// // //     //                 className={
// // //     //                   value === framework.value
// // //     //                     ? "mr-2 h-4 w-4 opacity-100"
// // //     //                     : "mr-2 h-4 w-4 opacity-0"
// // //     //                 }
// // //     //               />
// // //     //               { framework.label }
// // //     //             </CommandItem>
// // //     //           ))}
// // //     //         </CommandGroup>
// // //     //       </Command>
// // //     //     ]} // Close the array
// // //     //   </PopoverContent>

// // //     // </Popover>
    
// // //     <Popover>
// // //       <PopoverTrigger asChild>
// // //         <Button variant="outline">Open popover</Button>
// // //       </PopoverTrigger>
// // //       <PopoverContent className="w-80">
// // //         <div className="grid gap-4">
// // //           <div className="space-y-2">
// // //             <h4 className="font-medium leading-none">Dimensions</h4>
// // //             <p className="text-sm text-muted-foreground">
// // //               Set the dimensions for the layer.
// // //             </p>
// // //           </div>
// // //           <div className="grid gap-2">
// // //             <div className="grid grid-cols-3 items-center gap-4">
// // //               <label htmlFor="width">Width</label>
// // //               <Input
// // //                 id="width"
// // //                 defaultValue="100%"
// // //                 className="col-span-2 h-8"
// // //               />
// // //             </div>
// // //             <div className="grid grid-cols-3 items-center gap-4">
// // //               <label htmlFor="maxWidth">Max. width</label>
// // //               <Input
// // //                 id="maxWidth"
// // //                 defaultValue="300px"
// // //                 className="col-span-2 h-8"
// // //               />
// // //             </div>
// // //             <div className="grid grid-cols-3 items-center gap-4">
// // //               <label htmlFor="height">Height</label>
// // //               <Input
// // //                 id="height"
// // //                 defaultValue="25px"
// // //                 className="col-span-2 h-8"
// // //               />
// // //             </div>
// // //             <div className="grid grid-cols-3 items-center gap-4">
// // //               <label htmlFor="maxHeight">Max. height</label>
// // //               <Input
// // //                 id="maxHeight"
// // //                 defaultValue="none"
// // //                 className="col-span-2 h-8"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </PopoverContent>
// // //     </Popover>

// // //   );
// // // };

// // // export default Search;





// "use client";

// import React, { useEffect, useState } from 'react';
// import Search_SVG from '@/images/icon-search.svg';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';

// import { Check, ChevronsUpDown } from "lucide-react";

// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
// } from "@/components/ui/command"

// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Input } from "@/components/ui/input";
// import { Label } from '@/components/ui/label';
 

// const Search = () => {
//     const [searchQuery, setSearchQuery] = useState<string>('');
//     const [open, setOpen] = useState<boolean>(false);

//     useEffect(() => {
//         const down = (e: KeyboardEvent) => {
//           if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
//             e.preventDefault()
//             setOpen((open) => !open)
//           }
//         }
//         document.addEventListener("keydown", down)
//         return () => document.removeEventListener("keydown", down)
//       }, []);

//   return (
//     <div className='bg-white text-dark p-[6px] rounded-full mb-3'>
//         <div className="grid grid-cols-[1fr_1fr_60px] items-center">
//             <div>Lorem ipsum dolor sit amet.</div>
//             <div><SearchTour /></div>
//             <div className='inline-flex items-center'>
//                 <Button variant={'secondary'} size={'default'} className='p-0 h-auto'>
//                     <Image src={Search_SVG} alt='Search Now' className='w-[58px] h-[58px]'/>
//                 </Button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Search;



// const SearchTour: React.FC = () => {
//   const [open, setOpen] = useState<boolean>(false);
//   const [value, setValue] = useState<string>('');

//   interface Framework {
//     value: string;
//     label: string;
//   }

//   const frameworks: Framework[] = [
//     {
//       value: "next.js",
//       label: "Next.js",
//     },
//     {
//       value: "sveltekit",
//       label: "SvelteKit",
//     },
//     {
//       value: "nuxt.js",
//       label: "Nuxt.js",
//     },
//     {
//       value: "remix",
//       label: "Remix",
//     },
//     {
//       value: "astro",
//       label: "Astro",
//     },
//   ]

//   return (
//     <div>
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//         {value
//           ? frameworks.find((framework) => framework.value === value)?.label
//           : "Select tour..."}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-80 p-0 shadow-none border-none bg-transparent">
//         <Command className="rounded-lg border shadow-md">
//           <CommandInput placeholder="Type a command or search..." />
//           <CommandList>
//             <CommandEmpty>No results found.</CommandEmpty>
//             <CommandGroup>
//             {frameworks.map((framework) => (
//               <CommandItem
//                 key={framework.value}
//                 value={framework.value}
//                 onSelect={(currentValue) => {
//                   setValue(currentValue === value ? "" : currentValue)
//                   setOpen(false)
//                 }}
//               >
//                 {framework.label}
//               </CommandItem>
//             ))}
//           </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//     </div>
//   )
// }