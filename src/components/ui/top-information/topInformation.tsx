import { paragraph } from '@/config/fonts'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'

export const TopInformation = () => {
  return (
    <div className='flex items-center justify-center lg:justify-end gap-4 w-full h-auto z-10  py-2 lg:pr-[80px]'>
      <a href="" className='flex items-center justify-center gap-1 cursor-pointer'>
        <div className='p-1 bg-pyellow rounded-full'>
          <FaInstagram color='#1E3A5F' size='16'/>
        </div>
        <span className={`${paragraph.className} text-sblue text-[14px]`}>Instagram</span>
      </a>
      <a href="" className='flex items-center justify-center gap-1 cursor-pointer'>
        <div className='p-1 bg-pyellow rounded-full'>
          <BsFacebook color='#1E3A5F' size='16'/>
        </div>
        <span className={`${paragraph.className} text-sblue text-[14px]`}>Facebook</span>
      </a>
      <a href="" className='flex items-center justify-center gap-1 cursor-pointer'>
        <div className='p-1 bg-pyellow rounded-full'>
          <IoMailOutline color='#1E3A5F' size='16'/>
        </div>
        <span className={`${paragraph.className} text-sblue text-[14px]`}>info@mercadosolar.com.ar</span>
      </a>
    </div>
  )
}
