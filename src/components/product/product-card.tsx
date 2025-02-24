'use client'
import { paragraph, titleFont } from '@/config/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductProps {
  title: string
  price: number
  image: string
  brand: string
  slug: string
}

export const ProductCard = ({ title, brand, price, image, slug }: ProductProps) => {
  return (
    <Link href={`/product/${slug}`} passHref
      className='flex flex-col justify-center items-center p-4 rounded-lg  shadow-lg h-[360px] w-[240px] group cursor-pointer'
    >
      <Image
        src={`/images/product/${image}`}
        alt='panel solar'
        width={240}
        height={420}
        className='object-contain object-center w-auto h-[240px] group-hover:scale-105 transition-transform duration-300 ease-in-out'
      />
      <div className='flex flex-col justify-center gap-1'>
        <div className='w-full'>
          <p className={`${titleFont.className} text-balance text-[14px]`}>{title}</p>
          <p className={`${paragraph.className} text-balance text-[12px] text-ngrey/50`}>{brand}</p>
        </div>
        <span className={`${paragraph.className} text-balance text-[20px] text-sgreen`}>$ {price} </span>
      </div>
    </Link>
  )
}
