'use client'
import { paragraph } from '@/config/fonts'
import React from 'react'
import { Title } from '../ui/font-style/title'

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

  return (
    <div className='lg:w-1/2'>
      <Title title={title} className='mb-4'/>
      <table className='w-full border-collapse'>
        <tbody>
          {characteristics.map((char, index) => (
            <tr
              key={char.label}
              className={`border-b p-2 ${index % 2 === 0 ? 'bg-sblue/10 rounded-xl' : ''}`}
            >
              <td className={`${paragraph.className} text-[16px] text-sblue/80 py-1 px-2 `}>{char.label}:</td>
              <td className={`${paragraph.className} text-right text-[16px] text-sblue/80 py-1 px-2`}>
                {char.value} {char.unit || ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
