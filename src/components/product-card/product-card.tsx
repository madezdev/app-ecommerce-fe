'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { paragraph, titleFont } from '@/config/fonts'
import { formatPriceARS } from '@/constants/exchangeRate'
import { IProductCard } from '@/interface/product-cards'
import { useDolarStore } from '@/store/dolar.store'

interface Props {
  product: IProductCard
}

export const ProductCard = ({ product }: Props) => {
  const { slug, title, description, brand, price, img } = product
  const getDollarBlue = useDolarStore((state) => state.dolarBlue)
  return (
    <Link
      href={`/product/panel-solar/${slug}`}
      passHref
      className='flex flex-col justify-between p-4 rounded-lg shadow-md h-[400px] w-[240px] group cursor-pointer'>

      <div className='flex justify-center items-center h-[200px]'>
        <Image
          src={img.startsWith('http') ? img : `/images/product/${img}`}
          alt={title}
          width={180}
          height={180}
          className='object-contain object-center w-auto h-full group-hover:scale-105 transition-transform duration-300 ease-in-out'
        />
      </div>

      <div className='flex flex-col justify-between min-h-[120px]'>
        <div>
          <p className={`${titleFont.className} text-pretty text-[16px] text-sblue`}>
            {title}
          </p>
          <p className={`${paragraph.className} text-balance text-[14px] text-sblue/50 line-clamp-2`}>
            {description}
          </p>
          <p className={`${paragraph.className} text-pretty text-[12px] text-sblue/50`}>
            {brand}
          </p>
        </div>
        <span className={`${paragraph.className} text-balance text-[20px] text-sgreen`}>
          {getDollarBlue !== null ? formatPriceARS(price, getDollarBlue ) : '$'} <small> + IVA</small>
        </span>
      </div>
    </Link>
  )
}
