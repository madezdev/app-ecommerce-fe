'use client'
import { paragraph } from '@/config/fonts'
import { formatPriceARS } from '@/constants/exchangeRate'
import { initialData } from '@/dataBase/seedProduct'
import { useExchangeRate } from '@/hooks/useExchangeRate'
import Image from 'next/image'
import React from 'react'
import QuantitySelect from '../ui/quantity-select/quantitySelect'

const productsInCart = [
  initialData.products[ 0 ],
  initialData.products[ 1 ],
  initialData.products[ 2 ],
]

export const ProductsInCart = () => {
  const dolarBlue = useExchangeRate()
  return (
    <>
      {productsInCart.map(product => (
        <div key={product.slug} className="flex items-center mb-5 w-full">
          {/* Contenedor de la imagen */}
          <div className='w-20 h-20 flex items-center justify-center overflow-hidden bg-gray-100 rounded-md mr-5'>
            <Image
              src={`/images/product/${product.images[0]}`}
              width={80}
              height={80}
              alt={product.title}
              className='w-full h-full object-contain'
            />
          </div>

          {/* Contenedor de información */}
          <div className="flex flex-col justify-center w-full">
            <p className={`${paragraph.className} text-sblue text-[16px] font-medium leading-tight`}>{product.title}</p>
            <div className="flex items-center justify-between mt-2">
              <span
                className={`${paragraph.className} text-balance text-[20px] text-sgreen`}>
                {dolarBlue !== null ? formatPriceARS(product.price, dolarBlue) : '$'} <small> + IVA</small>
              </span>
              <QuantitySelect />
            </div>

            <button className="text-left mt-2 text-sm text-red-500 hover:text-red-700">
              Quitar
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
