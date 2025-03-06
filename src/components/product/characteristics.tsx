'use client'
import { paragraph, titleFont } from '@/config/fonts'
import { typeCharacteristicSolar } from '@/dataBase/seedProduct'
import React from 'react'

interface Props {
  characteristics: typeCharacteristicSolar[]
}

export const ProductCharacteristics = ({ characteristics }: Props) => {
  if (!characteristics.length) {
    return null
  }

  const {
    dimensions,
    weight,
    celltype,
    ratedOutput,
    ratedVoltage,
    ratedcurrent,
    openircuitVoltage,
    shortCircuitCurrent,
    moduleEfficiency,
  } = characteristics[0] // Solo se usa el primer objeto del array

  return (
    <div className='lg:w-1/2 '>
      <h2 className={`${titleFont.className} text-[18px] lg:text-[20px] text-sblue mb-4`}>Características del Producto</h2>
      <table className='w-full border-collapse'>
        <tbody>
          <tr className='border-b p-2 bg-sblue/10 rounded-md'>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>Dimensiones:</td>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>{dimensions} mm</td>
          </tr>
          <tr className='border-b p-2'>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>Peso:</td>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>{weight} kg</td>
          </tr>
          <tr className='border-b p-2 bg-sblue/10 rounded-md'>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>Tipo de Celda:</td>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>{celltype}</td>
          </tr>
          <tr className='border-b p-2'>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>Potencia Nominal:</td>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>{ratedOutput} W</td>
          </tr>
          <tr className='border-b p-2 bg-sblue/10 rounded-md'>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>Voltaje Nominal:</td>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>{ratedVoltage} V</td>
          </tr>
          <tr className='border-b p-2'>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>Corriente Nominal:</td>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>{ratedcurrent} A</td>
          </tr>
          <tr className='border-b p-2 bg-sblue/10 rounded-md'>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>Voltaje en Circuito Abierto:</td>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>{openircuitVoltage} V</td>
          </tr>
          <tr className='border-b p-2'>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>Corriente de Cortocircuito:</td>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>{shortCircuitCurrent} A</td>
          </tr>
          <tr className='border-b p-2 bg-sblue/10 rounded-md'>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>Eficiencia del Módulo:</td>
            <td className={`${paragraph.className} text-[16px] text-sblue/80`}>{moduleEfficiency} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
