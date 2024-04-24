import React from 'react';
import BannerBG from './img/hero-bg.jpg';
import Link from 'next/link';

const HeroCarousel = () => {
  return (
    <div className='p-4'>
        <div className="bg-slate-100 flex flex-col justify-end bg-center bg-cover rounded-xl px-4 py-[30px] text-white text-center min-h-[660px]" style={{ backgroundImage: `url(${BannerBG.src})` }}>
            <div className="container">
                
                <div className="font-inter"><strong>India:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy when. <Link href="#" className="underline underline-offset-4">Read More</Link></div>
            </div>
        </div>
    </div>
  )
}

export default HeroCarousel;