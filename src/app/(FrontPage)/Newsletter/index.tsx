import React from 'react';
import EmailSVG from './img/envelope.svg';
import Image from 'next/image';
import { NewsletterForm } from '@/forms/NewsletterForm';

const Newsletter = () => {
  return (
    <div className='p-4'>
        <div className="bg-dark rounded-xl py-[40px] text-white">
            <div className="container-fluid">
              <div className="grid lg:grid-cols-[1fr_auto] items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="inline-flex">
                    <Image src={EmailSVG} alt='email' className='max-w-[30px] lg:max-w-[56px]' />
                  </div>
                  <div>
                    <h3 className="font-poppins font-medium text-sm lg:text-3xl">Send me exclusive offers:</h3>
                    <p className='text-[12px] lg:text-lg'>Unique ideas, and personalized tips for travels.</p>
                  </div>
                </div>
                <div className="">
                  <NewsletterForm placeholder={'your@email.com'}/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;