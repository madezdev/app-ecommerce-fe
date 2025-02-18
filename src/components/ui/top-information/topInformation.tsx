import { paragraph } from '@/config/fonts'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'

export const TopInformation = () => {
  return (
    <div className='absolute top-3 right-5 flex items-center justify-end gap-4 w-full h-auto'>
      <a href="" className='flex items-center justify-center gap-1 cursor-pointer'>
        <div className='p-2 bg-pyellow rounded-full'>
          <FaInstagram color='#1E3A5F' />
        </div>
        <span className={`${paragraph.className} text-sblue`}>Instagram</span>
      </a>
      <a href="" className='flex items-center justify-center gap-1 cursor-pointer'>
        <div className='p-2 bg-pyellow rounded-full'>
          <BsFacebook color='#1E3A5F' />
        </div>
        <span className={`${paragraph.className} text-sblue`}>Facebook</span>
      </a>
      <a href="" className='flex items-center justify-center gap-1 cursor-pointer'>
        <div className='p-2 bg-pyellow rounded-full'>
          <IoMailOutline color='#1E3A5F'/>
        </div>
        <span className={`${paragraph.className} text-sblue`}>info@mercadosolar.com.ar</span>
      </a>
    </div>
  )
}
