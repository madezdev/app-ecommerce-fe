'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { paragraph } from '@/config/fonts'
import { formatPriceARS } from '@/constants/exchangeRate'
import { initialData } from '@/dataBase/seedProduct'
import { useExchangeRate } from '@/hooks/useExchangeRate'
import QuantitySelect from '../ui/quantity-select/quantitySelect'
import { p } from 'framer-motion/client'

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  showQuantity?: boolean
}

const calculateTotalPriceWithIVA = (price: number, iva: number) => {
  const priceWithIVA = price * (1 + iva / 100)
  return Math.round(priceWithIVA)
}

export const ProductsInCart = ({ showQuantity = true }: Props) => {
  const dolarBlue = useExchangeRate()
  const [quantities, setQuantities] = useState(new Map(productsInCart.map(product => [product.slug, 1])))

  const handleQuantityChange = (slug: string, newQuantity: number) => {
    setQuantities(prev => new Map(prev).set(slug, newQuantity))
  }

  return (
    <>
      {productsInCart.map(product => {
        const quantity = quantities.get(product.slug) || 1
        const priceWithIVA = calculateTotalPriceWithIVA(product.price, product.iva)
        const totalPrice = priceWithIVA * quantity

        return (
          <div key={product.slug} className="flex items-center mb-5 w-full max-w-[1000px] border-b border-sblue/20 pb-5">
            <div className='w-20 h-20 flex items-center justify-center overflow-hidden bg-gray-100 rounded-md mr-5'>
              <Image
                src={`/images/product/${product.images[0]}`}
                width={80}
                height={80}
                alt={product.title}
                className='w-full h-full object-contain'
              />
            </div>

            <div className="flex flex-col justify-center w-full">
              <Link href={`/product/panel-solar/${product.slug}`}>
                <p className={`${paragraph.className} text-sblue text-[16px] font-medium leading-tight`}>{product.title}</p>
              </Link>
              <div className="flex gap-2 mt-2">
                <small className='text-porange'>Precio unitario</small>
                <small className='text-porange'>{dolarBlue !== null ? formatPriceARS( calculateTotalPriceWithIVA(product.price, product.iva), dolarBlue) : ''  }</small>
                <small className='text-porange'>IVA incluido</small>
              </div>
              {
                showQuantity ? (
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-col ">
                      <small className='text-sblue/50'>Subtotal</small>
                      <span className={`${paragraph.className} text-balance text-[20px] text-sgreen`}>
                        {dolarBlue !== null ? formatPriceARS(totalPrice, dolarBlue) : '$'}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-col items-center">
                        <small className='text-sblue/50'>Cantidad</small>
                        <QuantitySelect
                          max={product.stock}
                          value={quantity}
                          onChangeAction={newQuantity => handleQuantityChange(product.slug, newQuantity)}
                        />
                        <small className={`${paragraph.className} text-sblue/80 mt-1`}>
                          Disponible {product.stock}
                        </small>

                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <small className='text-sblue/50'>Subtotal</small>
                    <div className="flex items-center gap-2">
                      <span className={`${paragraph.className} text-balance text-[20px] text-sgreen`}>
                        {quantity} x {' '}
                      </span>
                      <span className={`${paragraph.className} text-balance text-[20px] text-sgreen`}>
                        {dolarBlue !== null ? formatPriceARS(totalPrice, dolarBlue) : '$'} {/* Dejar fijo el precio mediante uso del store */}
                      </span>
                    </div>
                  </div>
                )
              }
              { showQuantity && (
                <button className="text-left mt-2 text-sm text-red-500 hover:text-red-700">
                  Quitar
                </button>
              )}

            </div>
          </div>
        )
      })}
    </>
  )
}
