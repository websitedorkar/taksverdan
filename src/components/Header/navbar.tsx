"use client";

import * as React from "react"
import Link from "next/link"

import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { menus } from "./data";
import Image from "next/image";

interface SubmenuItem {
  id: number;
  value?: string; // Only for countries
  slug?: string; // Only for dropdown items
  label: string;
  thumb?: any;
}

interface CountryGroup {
  id: number;
  name: string;
  list: SubmenuItem[];
}

interface SubmenuCountry {
  type: 'country';
  group: CountryGroup[];
}

interface MenuItem {
  id: number;
  slug: string;
  label: string;
  submenu?: SubmenuCountry;
}

const Navbar = () => {
  return (
    <ul className="header__navbar flex items-center gap-x-[40px]">
      {menus && menus.map(menuItem => (
        <li key={menuItem.id} className="nav-item">
          {menuItem.submenu ? (
            <div className="has-submenu relative">
              <Link href={menuItem.slug} className="text-white font-inter font-light py-4 text-[18px]">{menuItem.label}</Link>
              <div className={`submenu shadow-lg absolute rounded-lg py-4 px-6 top-[calc(100%+2rem)] ${menuItem.submenu?.type === 'country' ? ' -start-14 w-[590px] bg-white ' : ' w-[280px] start-1/2 -translate-x-1/2 bg-dark'}`}>
                { menuItem.submenu?.type === 'country' ? (
                  <div>
                    <CountryListDropdown list={menuItem.submenu.group}/>
                  </div>
                ) : (
                  <div>List</div>
                )}
              </div>
            </div>
          ) : (
            <Link href={menuItem.slug} className="text-white font-inter font-light text-[18px]">{menuItem.label}</Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Navbar;

const CountryListDropdown = ({ list }: { list: CountryGroup[] }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {list.map((group, index) => (
        <AccordionItem
          key={group.id}
          value={`item-${group.id}`}
          className={index === list.length - 1 ? "border-b-0" : ""}
        >
          <AccordionTrigger className="text-[22px] font-normal text-[#3F3D56] font-inter hover:no-underline">{group.name}</AccordionTrigger>
          <AccordionContent>
            <ul className="grid grid-cols-[repeat(4,minmax(100px,1fr))] gap-3">
              {group.list.map(item => (
                <li key={item.id} className="inline-flex items-center gap-x-2">
                  { item.thumb && <div><Image className="w-[48px] h-[48px] rounded-xl object-cover object-center" src={item.thumb} alt={item.label}/></div> }
                  <div className="text-[15px] font-poppins font-normal">{item.label}</div>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}


// "use client"

// import * as React from "react"
// import Link from "next/link"

// import { cn } from "@/lib/utils"
// import { ChevronDown } from 'lucide-react';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

// import { menus } from "./data";

// const Navbar = () => {
//   return (
//     <ul className="header__navbar flex items-center gap-x-[40px]">
//       {
//         menus && menus.map(menuItem =>(
//           <li key={menuItem.id}>
//             {menuItem.submenu ? 
//             <div className="has-submenu relative">
//               <Link href={menuItem.slug} className="text-white font-inter font-light">{menuItem.label}</Link>
//               <div className="submenu absolute bg-white w-[590px] rounded-lg py-4 px-6 start-0 top-[calc(100%+2rem)]">
                
//                 {
//                   menuItem.submenu?.type === 'country' ?
//                   <div>
//                     <CountryListDropdown list={menuItem.submenu?.group}/>
//                   </div>
//                   :
//                   <div>List</div>
//                 }
//               </div>
//             </div>
//             :
//             <Link href={menuItem.slug} className="text-white font-inter font-light">{menuItem.label}</Link>
//           }
//           </li>
//         ))
//       }
//     </ul>
//   )
// }
// export default Navbar;


// const CountryListDropdown = ({ list }) =>{

//   return (
//     <Accordion type="single" collapsible className="w-full">
//       {list.map(group =>(
//       <AccordionItem value={`item-${group.id}`}>
//         <AccordionTrigger>{group.name}</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       ))}
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It's animated by default, but you can disable it if you prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   )
// }