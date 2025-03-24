'use client'
import { redirect } from 'next/navigation'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

interface Props {
  path: string
}

export const BtnVolver = ({ path }: Props) => {
  return (
    <div className='self-start'>
      <button
        onClick={() => redirect(`/${path}`)}
        className='flex items-center gap-2 text-sblue/50 hover:scale-105 hover:text-sblue transition-all delay-150 ease-in-out px-3 py-1 rounded-md text-sm shadow'
      >
        <FaArrowLeft />
          volver
      </button>
    </div>
  )
}
