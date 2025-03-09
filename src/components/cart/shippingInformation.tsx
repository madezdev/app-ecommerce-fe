import React from 'react'
import { Title } from '../ui/font-style/title'
import { paragraph } from '@/config/fonts'
import Button from '../ui/button/button'

export const ShippingInformation = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-7 h-fit w-full max-w-[500px]">
      <Title title='Datos de envio' />

      <div className="grid  grid-cols-[minmax(80px,150px)_1fr]">

        <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>Provincia</span>
        <span className={`${paragraph.className} text-right text-sblue text-[16px]`}>Buenos Aires</span>

        <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>Calle</span>
        <span className={`${paragraph.className} text-right text-sblue text-[16px] whitespace-nowrap overflow-hidden text-ellipsis`}>
          Monseñor Jose Francisco Marcon
        </span>

        <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>Numero</span>
        <span className={`${paragraph.className} text-right text-sblue text-[16px]`}>5446</span>

        <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>Localidad</span>
        <span className={`${paragraph.className} text-right text-sblue text-[16px]`}>La Tablada</span>

        <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>Codigo postal</span>
        <span className={`${paragraph.className} text-right text-sblue text-[16px]`}>1766</span>

      </div>

      <div className="mt-5 mb-2 w-full">
        <Button
          fullWidth
          variant='action'
          className="flex justify-center"
        >
              Cambiar
        </Button>

      </div>

    </div>
  )
}
