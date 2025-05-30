'use client'
import React, { useState } from 'react'
import { Product } from '@/interface/product'
import { FavoriteButton } from '../ui/favorite-button/favoriteButton'
import { paragraph, titleFont } from '@/config/fonts'
import { formatPriceARS } from '@/constants/exchangeRate'
import QuantitySelect from '../ui/quantity-select/quantitySelect'
import Button from '../ui/button/button'
import { MediosPagos } from '../ui/medios-pagos/mediosPagos'
import { useDolarStore } from '@/store/dolar.store'

interface Props {
  detail: Product
}

export const PurchaseProducts = ({ detail }: Props) => {
  const [quantity, setQuantity] = useState(1)
  const getDollarBlue = useDolarStore((state) => state.dolarBlue)
  const product = detail

  return (
    <div className='flex h-auto gap-4 sticky top-40'>
      <section className='flex flex-col h-fit border border-sblue/20 rounded-lg p-4 '>
        <div className='self-end'>
          <FavoriteButton />
        </div>
        <div className='flex flex-col justify-between flex-grow gap-4'>
          <div>
            <h3 className={`${titleFont.className} text-sblue font-medium paragraph-md`}>
              {product.title.toUpperCase()}
            </h3>
            <p className={`${paragraph.className} text-[16px] text-sblue/50`}>{product.description}</p>
            <small className='text-sblue/50'>{product.brand}</small>
          </div>
          <div className='flex flex-col'>
            <span className={`${paragraph.className} text-[28px] text-sgreen`}>
              {getDollarBlue !== null ? formatPriceARS(product.price.price, getDollarBlue) : '$'} <small>+ IVA</small>
            </span>
            <small className={`${paragraph.className} text-[16px] text-sgreen`}>{product.price.iva}% IVA</small>
          </div>
          <div>
            <p className={`${paragraph.className} text-[16px] text-sblue/50 pb-2`}>Disponibles: <span>{product.stock.stock}</span></p>
            <QuantitySelect
              max={product.stock.stock}
              value={quantity}
              onChangeAction={setQuantity}/>
          </div>

          {/* Botones alineados abajo */}
          <div className='flex flex-col gap-2 mt-auto'>
            <Button variant='primary' fullWidth onClick={() => console.log('Agregado al carrito')}>
              Agregar al carrito
            </Button>

            <Button variant='secondary' fullWidth onClick={() => console.log('Compra iniciada')}>
              Comprar
            </Button>
          </div>
        </div>
        <div className='w-full mt-4'>
          <MediosPagos />
        </div>
      </section>
    </div>
  )
}
