import React from 'react'
import { Title } from '../ui/font-style/title'
import Button from '../ui/button/button'

export const PurchaseSummary = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-7 h-fit w-full max-w-[600px]">
      <Title title='Resumen de compra' />

      <div className="grid grid-cols-2">

        <span>No. Productos</span>
        <span className="text-right">3 artículos</span>

        <span>Subtotal</span>
        <span className="text-right">$ 100</span>

        <span>Impuestos (15%)</span>
        <span className="text-right">$ 100</span>

        <span className="mt-5 text-2xl">Total:</span>
        <span className="mt-5 text-2xl text-right">$ 100</span>

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
