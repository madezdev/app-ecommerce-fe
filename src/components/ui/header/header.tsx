import { titleFont } from '@/config/fonts'
import Image from 'next/image'
import React from 'react'

interface Props {
  title: string
  img: string
  className?: string
}

export const Header = ({ title, img, className }: Props) => {
  return (
    <header className='relative h-[200px] lg:h-[200px] w-full'>
      {/* Fondo semitransparente */}
      <div className='absolute inset-0 bg-sblue/50 bg-opacity-50 z-10'></div>

      {/* Imagen de fondo */}
      <Image
        src={`/images/img/${img}.webp`}
        alt={title}
        width={1920}
        height={400}
        className='absolute inset-0 h-full w-full object-cover object-center z-0'
      />

      {/* Título centrado */}
      <div className={`absolute inset-0 flex items-center justify-center z-30 ${className}`}>
        <h1 className={`${titleFont.className} text-center text-nwhite heading-md font-medium`}>
          {title.toUpperCase()}
        </h1>
      </div>
    </header>
  )
}
