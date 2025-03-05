import React from 'react'

export const MediosPagos = () => {
  return (
    <article className='flex flex-col  border border-sblue/20 rounded-lg p-4'>
      <div>
        <h4 className='text-sblue font-medium paragraph-md'>Medios de pago</h4>
      </div>
      <div className='flex flex-col justify-between flex-grow gap-4'>
        <div>
          <p className='text-sblue/50'>Aceptamos los siguientes medios de pago:</p>
        </div>
        <ul className='list-disc list-inside'>
          <li className='text-sblue/50'>Tarjeta de crédito</li>
          <li className='text-sblue/50'>Tarjeta de débito</li>
          <li className='text-sblue/50'>Transferencia bancaria</li>
          <li className='text-sblue/50'>Mercado Pago</li>
          <li className='text-sblue/50'>Efectivo</li>
        </ul>
      </div>
    </article>
  )
}
