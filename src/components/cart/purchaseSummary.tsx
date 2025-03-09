import React from 'react'
import { Title } from '../ui/font-style/title'
import Button from '../ui/button/button'
import { paragraph } from '@/config/fonts'

export const PurchaseSummary = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-7 h-fit w-full max-w-[500px]">
      <Title title='Resumen de compra' />

      <div className="grid grid-cols-2">

        <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>No. Productos</span>
        <span className={`${paragraph.className} text-right text-sblue text-[16px]`}>3 artículos</span>

        <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>Envío</span>
        <span className={`${paragraph.className} text-right text-sblue text-[16px]`}>$ 100</span>

        <span className={`${paragraph.className} text-sblue/80 text-[18px] font-medium`}>Total:</span>
        <span className={`${paragraph.className} text-right text-sblue text-[18px] font-medium`}>$ 100</span>

      </div>

      <div className="mt-5 mb-2 w-full">
        <Button
          fullWidth
          className="flex justify-center"
        >
          Confirmar
        </Button>

      </div>

    </div>
  )
}
