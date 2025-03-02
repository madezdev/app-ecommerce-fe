import { paragraph, titleFont } from '@/config/fonts'
import Image from 'next/image'
import React from 'react'

interface Props {
  title: string
  description: string
  img: string
}

export const ItemSolution = ({ title, description, img }: Props) => {
  return (
    <div className='flex flex-col items-center p-4 w-[240px] h-[260px] group cursor-pointer'>
      {/* Contenedor de la imagen con borde circular */}
      <div className='w-[90px] h-[90px] flex items-center justify-center '>
        <Image
          src={img}
          alt={title}
          width={80}
          height={80}
          className='object-contain object-center group-hover:scale-105 transition-transform duration-300 ease-in-out'
        />
      </div>

      {/* Contenedor de texto */}
      <div className='text-center mt-4'>
        <h4 className={`${titleFont.className} text-lg font-bold text-sblue`}>
          {title}
        </h4>
        <p className={`${paragraph.className} text-sm text-sblue/50 mt-2`}>
          {description}
        </p>
      </div>
    </div>
  )
}
