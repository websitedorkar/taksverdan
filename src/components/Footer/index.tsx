import React from 'react'
import { blocks } from './data.footer';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './img/logo.svg';
import FC from './img/fc.svg';

const Heading = ({ title }: { title: string }) => (
    <h3 className='font-poppins text-base xl:text-lg font-medium mb-5'>{ title }</h3>
)

const Footer = () => {
  return (
    <footer className='p-4'>
        <div className="bg-light rounded-2xl">
            <div className="pt-[100px] pb-[70px]">
                <div className="container-fluid">
                    <div className="grid-cols-[1fr_0.75fr] md:grid-cols-none md:grid-flow-col grid gap-x-6 gap-y-14">
                    { blocks && blocks.map((block) => {
                        switch (block.type) {
                            case 'about':
                                return (
                                    <div className='footer__block' key={block.id}>
                                        {block.heading && <Heading title={block.heading} />}
                                        <div>
                                            { block.content && <div className='max-w-[260px] font-inter text-black/50 font-normal text-sm xl:text-base leading-10 mb-7'>{ block.content }</div>}
                                            { block.logo && <div><Image src={block.logo} alt={'Logo'} className='max-w-[76px]'/></div>}
                                        </div>
                                    </div>
                                )
                            case 'linklist':
                                return (
                                    <div className='footer__block' key={block.id}>
                                        {/* Render Linklist block */}
                                        {block.heading && <Heading title={block.heading} />}
                                        <ul className='text-sm xl:text-base leading-8 space-y-3 lg:space-y-6 font-inter font-normal text-black/50'>
                                            {block.list.map((link, index) => (
                                                <li key={index}>
                                                    <Link href={link.slug} className=''>{link.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                                case 'social':
                                    return (
                                        <div className='footer__block ' key={block.id}>
                                            {block.heading && <Heading title={block.heading} />}

                                            { block.list &&<ul className='flex items-center flex-wrap gap-[7px]'>
                                                {
                                                    block.list.map(social =>(
                                                    <li key={social.id}>
                                                        <Link href={social.slug} className='text-white bg-black/20 w-[37px] h-[37px] min-w-[37px] inline-flex items-center justify-center rounded-full hover:bg-dark transition-all duration-100 ease-linear'>{social.icon}</Link>
                                                    </li>
                                                    ))
                                                }
                                            </ul> }
                                        </div>
                                    )
                            default:
                                return null; // Handle unknown block types
                            }
                        }) }
                    </div>
                </div>
            </div>

            <div className="py-[30px]">
                <div className="container-fluid">
                    <div className="flex gap-y-3 flex-col md:flex-row items-center justify-between">
                        <div className='md:order-2'>
                            <Image src={Logo} alt='logo' className='max-w-[33px]' />
                        </div>
                        <div className='md:order-1 font-inter font-normal text-base'>TAKs verden © Copyright 2024</div>
                        <ul className='md:order-3 flex flex-wrap items-center gap-[15px]'>
                            <li><Link href={'#'}>Privacy Policy</Link></li>
                            <li><span className="w-[1px] h-[20px] bg-black block"></span></li>
                            <li><Link href={'#'}>Terms of Service</Link></li>
                            <li><Link href={'#'}><Image src={FC} width={17} height={19} alt='logo' /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;