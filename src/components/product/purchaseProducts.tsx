'use client'
import React, { useState } from 'react'
import { Product } from '@/interface/product'
import { FavoriteButton } from '../ui/favorite-button/favoriteButton'
import { paragraph, titleFont } from '@/config/fonts'
import { formatPriceARS, formatPriceUSD } from '@/constants/exchangeRate'
import QuantitySelect from '../ui/quantity-select/quantitySelect'
import Button from '../ui/button/button'
import { MediosPagos } from '../ui/medios-pagos/mediosPagos'
import { useExchangeRate } from '@/hooks/useExchangeRate'

interface Props {
  detail: Product
}

export const PurchaseProducts = ({ detail }: Props) => {
  const [quantity, setQuantity] = useState(1)
  const dolarBlue = useExchangeRate()

  const { title, price, iva, brand, stock } = detail
  return (
    <div className='flex h-auto gap-4 sticky top-40'>
      <section className='flex flex-col h-fit border border-sblue/20 rounded-lg p-4 '>
        <div className='self-end'>
          <FavoriteButton />
        </div>
        <div className='flex flex-col justify-between flex-grow gap-4'>
          <div>
            <h3 className={`${titleFont.className} text-sblue font-medium paragraph-md`}>
              {title.toUpperCase()}
            </h3>
            <small className='text-sblue/50'>{brand}</small>
          </div>
          <div className='flex flex-col mb-8'>
            <span className={`${paragraph.className} text-[32px] text-sgreen`}>
              {dolarBlue !== null ? formatPriceARS(price, dolarBlue) : '$'} <small>+ IVA</small>
            </span>
            <small className={`${paragraph.className} text-[16px] text-sgreen`}>{iva}% IVA</small>
          </div>
          <div>
            <p className={`${paragraph.className} text-[16px] text-sblue/50 pb-2`}>Disponibles: <span>{stock}</span></p>
            <QuantitySelect
              max={stock}
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
