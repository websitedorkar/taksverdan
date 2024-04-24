import React from 'react';
import Image from 'next/image';
import { columns  } from './data';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className='py-[50px]'>
        <div className="container">
            <div className="grid grid-cols-1 gap-6">
                {columns && columns.map((column => (
                    <div key={column.id} className="grid__item min-h-[65vh] flex flex-col justify-end overflow-hidden relative z-[1] before:content-[''] before:w-full before:h-full before:absolute before:bg-black/20 before:z-[-1] before:start-0 before:top-0 bg-cover bg-center text-white rounded-2xl p-[50px]" style={{ backgroundImage: `url(${column.thumbnail.src ?? ''})` }}>
                        <div>
                            { column.title && <h2 className='text-5xl font-semibold leading-7 mb-5 font-poppins' dangerouslySetInnerHTML={{ __html: column.title }} />}
                            { column.description && <div className='max-w-[380px] mb-4' dangerouslySetInnerHTML={{ __html: column.description }} />}
                            { column.button_label && <Button variant={'secondary'} size={'default'}>{column.button_label}</Button>}
                        </div>
                    </div>
                )))}
            </div>
        </div>
    </section>
  )
}

export default CallToAction;