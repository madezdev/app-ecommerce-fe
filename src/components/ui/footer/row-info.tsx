import React from 'react'
import Image from 'next/image'
import { paragraph } from '@/config/fonts'
import { images } from '@/utils/info-footer'

export const RowInfo = () => {
  return (
    <section className='flex justify-between gap-2 items-center w-full '>
      {images.map((image, index) => (
        <article key={index} className='flex flex-col justify-between items-center w-full max-w-[370px] h-[262px] xl:h-[224px] overflow-hidden shadow-lg border border-nwhite/50 p-1 rounded-md  backdrop-blur-sm bg-nwhite/20'>
          <Image
            src={image.src}
            width={120}
            height={120}
            alt={image.text}
            className='w-[120px] object-cover'
          />
          <div className='p-3 mb-4 h-full'>
            <p className={`${paragraph.className} text-[14px] text-white text-center`}>{image.text}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
