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
  name?: string;
  list: SubmenuItem[];
}

const Navbar = () => {

  return (
    <ul className="header__navbar flex items-center gap-x-[40px]">
      {menus && menus.map(menuItem => (
        <li key={menuItem.id} className="nav-item">
          {menuItem.submenu ? (
            <div className="has-submenu relative">
              <Link href={'#'} className="text-dark font-roboto font-normal py-4 text-[18px] flex items-center">{menuItem.label}<ChevronDown className="w-5 mt-1 ms-1 h-auto"/>
              </Link>
              <div className={`submenu-list shadow-lg absolute rounded-lg py-4 px-6 top-[calc(100%+2rem)] bg-white before:w-0 before:h-0 before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-b-[10px] before:border-b-white before:-top-[10px] before:absolute ${menuItem.submenu?.type === 'country' ? ' -start-14 w-[420px] before:start-[6rem]' : ' w-[280px] start-1/2 -translate-x-1/2 before:start-1/2 before:-translate-x-1/2'}`}>
                { menuItem.submenu?.type === 'country' ? (
                  <div>
                    <CountryListDropdown list={menuItem.submenu.group}/>
                  </div>
                ) : (
                  <div><SubMenuListDropdown list={menuItem.submenu.list}/></div>
                )}
              </div>
            </div>
          ) : (
            <Link href={menuItem.slug} className="text-dark font-inter font-normal text-[18px]">{menuItem.label}</Link>
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
          <AccordionTrigger className="text-base font-normal text-[#3F3D56] font-inter hover:no-underline">{group.name}</AccordionTrigger>
          <AccordionContent>
            <ul className="grid grid-cols-[repeat(4,minmax(90px,1fr))] gap-3">
              {group.list.map(item => (
                <li key={item.id}>
                  <Link href={item.slug ?? ''} className="inline-flex items-center gap-x-2">
                    { item.thumb && <div><Image className="min-w-[34px] w-[34px] h-[34px] rounded-md object-cover object-center" src={item.thumb} alt={item.label}/></div> }
                    <div className="text-sm font-poppins font-normal">{item.label}</div>                    
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const SubMenuListDropdown = ({ list }: { list: SubmenuItem[] }) => {
  return (
    <ul className="flex flex-col">
      { list && list.map((menuItem, index) => (
        <li key={index} 
        className={`${index === list.length - 1 ? "" : "border-b border-[#3F3D56]/20"}`}><Link className="py-3 block text-base font-normal font-inter text-[#3F3D56]" href={menuItem.slug ?? '#'}>{ menuItem.label }</Link></li>
      ))}
    </ul>
  )
}
