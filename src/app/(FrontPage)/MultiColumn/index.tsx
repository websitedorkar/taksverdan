import React from 'react';
import Image from 'next/image';
import { columns  } from './data';
import { Button } from '@/components/ui/button';

const MultiColumn = () => {
  return (
    <section className='py-[100px]'>
        <div className="container-fluid">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {columns && columns.map((column => (
                    <div key={column.id} className="grid__item xl:min-h-[65vh] flex flex-col justify-between overflow-hidden relative z-[1] before:content-[''] before:w-full before:h-full before:absolute before:bg-black/40 before:z-[-1] before:start-0 before:top-0 bg-cover bg-center bg-dark text-white rounded-2xl py-[50px] px-[15px] lg:px-[35px]" style={{ backgroundImage: `url(${column.thumbnail.src ?? ''})` }}>
                        <div>
                            { column.logo && <Image src={column.logo} alt='logo' className='max-w-[65px] mb-6'/>}
                        </div>
                        <div>
                            { column.title && <h2 className='text-3xl xl:text-5xl font-semibold leading-7 mb-5 font-poppins' dangerouslySetInnerHTML={{ __html: column.title }} />}
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

export default MultiColumn;