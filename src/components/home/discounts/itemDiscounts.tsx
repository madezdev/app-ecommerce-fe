import { paragraph, titleFont } from '@/config/fonts'
import Image from 'next/image'
import React from 'react'

export interface Discount {
  title: string;
  description: string;
  img: string;
}

export const ItemDiscounts: React.FC<Discount> = (discount) => {
  const { title, description, img } = discount

  return (
    <div className="w-full bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center gap-4">
      {/* Imagen arriba en mobile y tablet, a la derecha en desktop */}
      <div className="md:w-[250px] xl:w-1/2 h-[250px] xl:h-[220px] relative">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
      </div>

      {/* Texto abajo en mobile/tablet, a la izquierda en desktop */}
      <div className="md:h-full w-full md:w-3/4 xl:w-1/2 flex flex-col items-center md:items-start  gap-2 p-4">
        <div className='flex-1'>
          <p className={`${paragraph.className} uppercase text-sblue text-lg lg:text-sm text-center md:text-left`}>
            {description}
          </p>
          <h3 className={`${titleFont.className} text-sblue uppercase  md:paragraph-sm text-center md:text-left mt-1`}>
            {title}
          </h3>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full md:w-auto">
          Ver ofertas
        </button>
      </div>
    </div>
  )
}
