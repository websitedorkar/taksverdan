import React from 'react';
import Image from 'next/image';
import LocationSVG from '@/images/location.svg';


interface TourCardProps {
    post: {
        id: number;
        title: string;
        location: string;
        thumbnail?: any;
    };
}


const TourCard =  ({ post }: TourCardProps) => {
    return (
        <div  className='z-[1] bg-cover bg-center text-white min-h-[192px] md:min-h-[340px] rounded-2xl p-5 flex flex-col justify-end relative before:content-[""] before:w-full before:h-[115px] before:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_100%)] before:opacity-80 before:absolute before:start-0 before:end-0 before:bottom-0 overflow-hidden before:z-[-1]' style={{ backgroundImage: `url(${ post.thumbnail.src ?? '' })` }}>
        { post.title && <h3 className="font-roboto text-lg lg:text-xl mb-1">{ post.title }</h3>}
        { post.location && <div className='flex items-center gap-2 text-[13px] lg:text-base'>
        <Image src={LocationSVG} alt={post.location} />
        { post.location }
        </div>}
    </div>
    )
}

export default TourCard;

