"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { menus } from "./data";

const Navbar = () => {
  return (
    <ul className="header__navbar flex items-center gap-x-[40px]">
      {
        menus && menus.map(menuItem =>(
          <li key={menuItem.id}>
            {menuItem.submenu ? 
            <div className="has-submenu relative">
              <Link href={menuItem.slug} className="text-white font-inter font-light">{menuItem.label}</Link>
              <div className="submenu absolute bg-white w-[590px] rounded-lg py-4 px-6 start-0 top-[calc(100%+2rem)]">
                
                {
                  menuItem.submenu?.type === 'country' ?
                  <div>
                    <CountryListDropdown list={menuItem.submenu?.list}/>
                  </div>
                  :
                  <div>List</div>
                }
              </div>
            </div>
            :
            <Link href={menuItem.slug} className="text-white font-inter font-light">{menuItem.label}</Link>
          }
          </li>
        ))
      }
    </ul>
  )
}
export default Navbar;


const CountryListDropdown = () =>{

  return (
    <Accordion type="single" collapsible className="w-full">
      {/* {list.map(group =>(
      <AccordionItem value={`item-${group.id}`}>
        <AccordionTrigger>{group.name}</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      ))} */}
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}