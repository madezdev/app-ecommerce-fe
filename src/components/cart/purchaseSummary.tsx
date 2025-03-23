import React from 'react'
import Link from 'next/link'
import { Title } from '../ui/font-style/title'
import Button from '../ui/button/button'
import { paragraph } from '@/config/fonts'

interface Props {
  path: 'checkout' | 'order'
  button?: 'Confirmar' | 'Enviar orden'
  id?: number
}

export const PurchaseSummary = ({ path, button, id }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-7 h-fit w-full max-w-[500px]">
      <Title title='Resumen de compra' />

      <div className="grid grid-cols-2 mt-4">

        <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>No. Productos</span>
        <span className={`${paragraph.className} text-right text-sblue text-[16px]`}>3 artículos</span>

        <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>Envío</span>
        <span className={`${paragraph.className} text-right text-sblue text-[16px]`}>$ 100</span>

        <span className={`${paragraph.className} text-sblue/80 text-[18px] font-medium`}>Total:</span>
        <span className={`${paragraph.className} text-right text-sblue text-[18px] font-medium`}>$ 100</span>

      </div>

      <div className="mt-5 mb-2 w-full">
        <Link href={`/${path}${id ? `/${id}` : ''}`}>
          <Button
            fullWidth
            className="flex justify-center"
          >
            {button}
          </Button>
        </Link>

      </div>

    </div>
  )
}
