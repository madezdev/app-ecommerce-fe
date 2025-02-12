import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMenu, IoSearch } from 'react-icons/io5'
import { PiShoppingCartSimple } from 'react-icons/pi'
import { Paragraph } from '../font-style/paragraph'
import { Title } from '../font-style/title'

const menuItems = [
  {
    title: 'Productos',
    url: '/products',
  },
  {
    title: 'Calculadora',
    url: '/calculator',
  },
  {
    title: 'Contacto',
    url: '/contact',
  },
]

export const TopMenu = () => {
  return (
    <nav className='relative flex justify-center items-center bg-transparent w-full gl:pl-[180px] mt-[24px] lg:mt-[48px] '>
      {/* navBar green */}
      <div className='flex justify-between items-center w-full h-[96px] ml-[20px] bg-sgreen rounded-tl-full rounded-bl-full'>
        {/* Logo */}
        <div>
          <Link href='/'
            className='flex justify-center items-center w-[50px] h-[50px] lg:w-[280px] lg:h-[104px] ml-4 lg:ml-0 bg-nwhite rounded-full shadow-lg'>
            <div className='flex justify-center items-center w-full h-full'>
              <Image
                src='/images/logo.png'
                width={70}
                height={70}
                alt='Mercado Solar'
              />
              <Title element='h2' size='2xl' weight='700' className='text-2xl hidden lg:block'>Mercado Solar</Title>
            </div>
          </Link>
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
            className='w-[150px] md:w-[300px] lg:w-[400px] h-[40px] bg-nwhite rounded-full pl-[40px] lg:pr-[20px] text-ngrey'
          />
          <IoSearch className='absolute top-[50%] left-[10px] transform -translate-y-1/2 text-ngrey'/>
        </div>
        <div className='flex justify-end items-center gap-2'>
          {/* menu + user */}
          <div className='flex justify-end items-center gap-4 lg:mr-[20px]'>
            <Link href='/login'>
              <Paragraph size='lg' color='nwhite' className='hidden lg:block hover:text-sblue focus:text-sblue hover:scale-105 transition-all duration-150'>Usuario</Paragraph>
            </Link>
            <button>
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
