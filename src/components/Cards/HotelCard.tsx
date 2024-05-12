import React from 'react';
import Image from 'next/image';
import StarSVG from '@/images/star.svg';
import Link from 'next/link';


interface HotelCardProps {
    post: {
        id: number;
        title: string;
        url?: string;
        ratings: string;
        total_ratings: string;
        thumb?: any;
    };
}

const HotelCard =  ({ post }: HotelCardProps) => {
    return (
        <Link href={post.url ?? '#'} className={`z-[1] bg-cover bg-center text-white min-h-[192px] md:min-h-[340px] rounded-2xl p-5 flex flex-col justify-end relative before:content-[""] before:w-full before:h-[115px] before:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_100%)] before:opacity-80 before:absolute before:start-0 before:end-0 before:bottom-0 overflow-hidden before:z-[-1]`} style={{ backgroundImage: `url(${post.thumb?.src ?? ''})` }}>
            {post.title && <h3 className="font-roboto text-lg lg:text-xl mb-1">{post.title}</h3>}
            {post.total_ratings && (
                <div className='flex items-center gap-1 text-[13px] lg:text-sm'>
                    <Image src={StarSVG} alt={`${post.ratings} ${post.total_ratings}`} />
                    <span className="text-[#FCA800]">{post.ratings}</span>({post.total_ratings})
                </div>
            )}
        </Link>
    )
}

export default HotelCard;

