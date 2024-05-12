import React from 'react';
import Image from 'next/image';
import CalenderSVG from '@/images/calender.svg';
import Link from 'next/link';


interface BlogCardProps {
    post: {
        id: number;
        thumbnail?: any;
        url?: string;
        title: string;
        date: string;
    };
}

const BlogCard =  ({ post }: BlogCardProps) => {
    return (
        <Link href={post.url ?? '#'} className='z-[1] bg-cover bg-center text-white min-h-[192px] lg:min-h-[340px] rounded-2xl p-5 flex flex-col justify-end relative before:content-[""] before:w-full before:h-[115px] before:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_100%)] before:opacity-80 before:absolute before:start-0 before:end-0 before:bottom-0 overflow-hidden before:z-[-1]' style={{ backgroundImage: `url(${ post.thumbnail.src ?? '' })` }}>
        { post.title && <h3 className="font-roboto text-lg lg:text-xl mb-1">{ post.title }</h3>}
        { post.date && <div className='flex items-center gap-2 text-[13px] lg:text-base'>
        <Image src={CalenderSVG} alt={post.date} />
        { post.date }
        </div>}
    </Link>
    )
}

export default BlogCard;

