'use client'
import { paragraph, titleFont } from '@/config/fonts'
import React from 'react'

interface Characteristic {
  label: string
  value: string | number
  unit?: string
}

interface Props {
  title: string
  characteristics: Characteristic[]
}

export const ProductCharacteristics = ({ title, characteristics }: Props) => {
  if (!characteristics.length) {
    return null
  }

  return (
    <div className='lg:w-1/2'>
      <h2 className={`${titleFont.className} text-[18px] lg:text-[20px] text-sblue mb-4`}>{title}</h2>
      <table className='w-full border-collapse'>
        <tbody>
          {characteristics.map((char, index) => (
            <tr
              key={char.label}
              className={`border-b p-2 ${index % 2 === 0 ? 'bg-sblue/10 rounded-md' : ''}`}
            >
              <td className={`${paragraph.className} text-[16px] text-sblue/80`}>{char.label}:</td>
              <td className={`${paragraph.className} text-[16px] text-sblue/80`}>
                {char.value} {char.unit || ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
