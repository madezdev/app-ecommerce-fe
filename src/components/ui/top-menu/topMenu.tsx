'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoBookOutline, IoMenu, IoSearch } from 'react-icons/io5'
import { PiShoppingCartSimple, PiSolarPanelLight } from 'react-icons/pi'
import { Paragraph } from '../font-style/paragraph'
import { Title } from '../font-style/title'
import { useUIStore } from '@/store/sidebar.store'
import { CiCalculator1 } from 'react-icons/ci'
import { Logo } from '../logo/logo'

const menuItems = [
  {
    title: 'Productos',
    url: '/products',
    icon: <PiSolarPanelLight size={ 20 } className='text-[#333333]'/>
  },
  {
    title: 'Blog',
    url: '/quote',
    icons: <IoBookOutline size={ 20 } className='text-[#333333]'/>
  },
  {
    title: 'Calculadora',
    url: '/calculator',
    icons: <CiCalculator1 size={ 20 } className='text-[#333333]'/>
  }
]

export const TopMenu = () => {
  const openSideMenu = useUIStore( state => state.openSideMenu )
  return (
    <nav className='relative flex justify-center items-center bg-transparent w-full gl:pl-[180px] mt-[24px] lg:mt-[48px] '>
      {/* navBar green */}
      <div className='flex justify-between items-center w-full h-[96px] ml-[20px] bg-sgreen rounded-tl-full rounded-bl-full'>
        {/* Logo */}
        <div>
          <Logo />
        </div>
        {/* menu */}
        <div className='hidden xl:flex'>
          <ul className='flex justify-center items-center space-x-4'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.url} >
                  <Paragraph size='lg' color='nwhite' className='hover:text-sblue focus:text-sblue hover:scale-105 transition-all duration-150'>{item.title}</Paragraph>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* buscador */}
        <div className='relative flex '>
          <input
            type='text'
            placeholder='Buscar'
            className='w-[170px] md:w-[300px] lg:w-[400px] h-[40px] bg-nwhite rounded-full pl-[40px] lg:pr-[20px] ml-4 text-ngrey'
          />
          <IoSearch className='absolute top-[50%] left-[30px] transform -translate-y-1/2 text-ngrey'/>
        </div>
        <div className='flex justify-end items-center gap-2'>
          {/* menu + user */}
          <div className='flex justify-end items-center gap-4 lg:mr-[20px]'>
            <Link href='/login'>
              <Paragraph size='lg' color='nwhite' className='hidden lg:block hover:text-sblue focus:text-sblue hover:scale-105 transition-all duration-150'>Usuario</Paragraph>
            </Link>
            <button
              onClick={openSideMenu}
            >
              <IoMenu className='lg:hidden w-[40px] h-[40px] text-nwhite' />
              <Paragraph size='lg' color='nwhite' className='hidden lg:block hover:text-sblue focus:text-sblue hover:scale-105 transition-all duration-150'>Menu</Paragraph>
            </button>
          </div>
          {/* cart */}
          <div className='mr-[20px] xl:mr-[80px]'>
            <Link href="/cart" className="mx-2">
              <div className="relative">
                <span className="absolute text-xs px-2 py-1 rounded-full font-bold -top-2 -right-2 bg-sblue text-white">
                  3
                </span>
                <div className='rounded-full bg-porange p-2'>
                  <PiShoppingCartSimple className="w-[24px] h-[24px] text-nwhite hover:text-sblue focus:text-sblue hover:scale-105 transition-all duration-150"  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
