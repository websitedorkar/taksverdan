"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import ICON_DOWN from '@/images/arrow-down.svg';
import { menus } from './data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface MenuItem {
  id: number;
  label: string;
  slug: string;
  submenu?: { type?: string; name?: string; group?: CountryGroup[]; list?: SubmenuItem[] }[];
}

interface SubmenuItem {
  id: number;
  value?: string;
  slug?: string;
  label: string;
  thumb?: any;
}

interface CountryGroup {
  id: number;
  type?: string;
  name?: string;
  list: SubmenuItem[];
}

const Path: React.FC<PathProps> = ({ variants, ...props }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
    variants={variants}
  />
);
interface PathProps {
  d: string;
  variants: {
    closed: { d?: string; opacity?: number };
    open: { d?: string; opacity?: number };
  };
  transition?: {
    duration: number;
  };
  animate: string; // Add animate property
  initial: string; // Add initial property
}

interface ButtonToggleProps {
  toggle: () => void;
  isOpen: boolean;
  classNames: string;
  buttonRef: React.RefObject<HTMLButtonElement>; // Add buttonRef to ButtonToggleProps
}
export const ButtonToggle: React.FC<ButtonToggleProps> = ({ toggle, isOpen, buttonRef, classNames = 'text-dark' }) => (
  <Button variant={'default'} size={'sm'} className={`p-0 h-auto mt-1 !bg-transparent ${classNames}`} onClick={toggle} ref={buttonRef}>
    <svg width="26" height="26" viewBox="0 0 23 23">
      <Path
        d="M 2 2.5 L 20 2.5"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", opacity: 1 },
          open: { d: "M 3 16.5 L 17 2.5", opacity: 1 },
        }}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
      />
      <Path
        d="M 2 16.346 L 20 16.346"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", opacity: 1 },
          open: { d: "M 3 2.5 L 17 16.346", opacity: 1 },
        }}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
      />
    </svg>
  </Button>
);

interface TogglerProps {
  classNames: string;
}

const Toggler: React.FC<TogglerProps> = ({ classNames }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setOpenSubMenuIndex(null); // Close any open submenus when the main menu is toggled
  };

  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setOpenSubMenuIndex(null); // Close any open submenus when clicking outside the menu
      }
    }
  
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
        {isOpen && <div className="fixed w-full h-full  bg-black bg-opacity-70 z-20 start-0 top-0"></div>}
      <div className="relative flex justify-end">
        <ButtonToggle toggle={() => toggleMenu()} isOpen={isOpen} buttonRef={buttonRef} classNames={`border-0 ${classNames}`}/>

        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, y: 0 },
            closed: { opacity: 0, y: '-1rem' },
          }}
          className={`absolute bg-white rounded-[18px] end-0 top-[calc(100%+2.75rem)] text-start px-6 py-4 min-w-[270px] shadow-sm before:content-[''] before:absolute before:w-0 before:h-0 before:-top-[9px] before:end-6 before:border-b-[10px] before:border-b-white before:border-x-[12px] before:border-x-transparent before:border-solid ${isOpen ? 'visible z-30' : 'invisible'}`}
          ref={menuRef}
        >
          {menus && (
            <ul className='p-0'>
              {menus.map((menu, idx) => {
                
                const isLastChild = idx === menus.length - 1;

                return (
                  // <MenuLink key={menu.id} index={idx} list={menus} menu={menu}/>
                  <li key={idx} className={` ${ !isLastChild ? 'border-b border-black/20' : ''}`}>
                    {
                      menu.submenu ? 
                      <React.Fragment>
                        <Link
                          href={menu.slug}
                          className={`text-lg py-4 flex items-center leading-6 font-normal font-sans text-[#3f3d56] ${menu.submenu ? 'has-submenu' : '' }`}
                          onClick={(event) => {
                            event.preventDefault(); // Prevent default link behavior
                            toggleSubMenu(idx); // Pass the index to toggleSubMenu
                          }}
                        >
                          {menu.label}
                          {menu.submenu && (
                            <span className="ms-auto">
                              <Image src={ICON_DOWN} alt="ICON DOWN" />
                            </span>
                          )}
                        </Link>
                        {openSubMenuIndex === idx && (
                          <motion.ul
                            initial="closed"
                            animate="open"
                            variants={{
                              open: { opacity: 1, height: 'auto' },
                              closed: { opacity: 0, height: 0 },
                            }}
                            className="overflow-hidden"
                          >
                            {menu.submenu?.type === 'country' ? (
                              <CountryListDropdown list={menu.submenu.group}/>
                            ) : (
                              <SubMenuListDropdown list={menu.submenu.list}/>
                            )}
                          </motion.ul>
                        )}
                      </React.Fragment>

                      :
                      <Link
                      href={menu.slug}
                      className={`text-lg py-4 flex items-center leading-6 font-normal font-sans text-[#3f3d56]`}
                    >
                      {menu.label}
                    </Link>
                    }
                    
                  </li>
                )
              })}
            </ul>
          )}
        </motion.div>
      </div>
    </>

  );
};

export default Toggler;


const CountryListDropdown = ({ list }: { list: CountryGroup[] }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {list.map((group, index) => (
        <AccordionItem
          key={group.id}
          value={`item-${group.id}`}
          className='border-b border-[#3F3D56]/20'>
          <AccordionTrigger className="text-lg py-3 font-normal text-[#3F3D56] font-sans hover:no-underline">{group.name}</AccordionTrigger>
          <AccordionContent>
            <ul className="grid grid-cols-[repeat(2,minmax(100px,1fr))] gap-3">
              {group.list.map(item => (
                <li key={item.id}>
                  <Link href={item.slug ?? ''} className="inline-flex items-center gap-x-2">
                    { item.thumb && <div><Image className="w-[35px] h-[35px] rounded-md object-cover object-center" src={item.thumb} alt={item.label}/></div> }
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
        className='border-t border-[#3F3D56]/20'>
          <Link href={menuItem.slug ?? ''} className={`text-base py-4 flex items-center leading-6 font-normal font-sans`}>
            {menuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}