import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

const menuItems = [
  {
    title: 'Productos',
    url: '/productos',
  },
  {
    title: 'Calculadora',
    url: '/calculadora',
  },
  {
    title: 'Contacto',
    url: '/contacto',
  },
]

export const TopMenu = () => {
  return (
    <nav className='flex justify-between items-center bg-transparent w-full pl-[180px] relative mt-[48px]'>
      <div className='bg-sgreen p-4 flex items-center justify-between w-full h-[80px]'>
        {/* Logo */}
        <Link href='/'
          className='flex flex-col items-center justify-center bg-nwhite p-2 absolute rounded-full left-[120px] w-[212px] h-[96px] shadow-md'>
          <span className={`${titleFont.className}`}>Mercado Solar</span>
          <span className={`${titleFont.className}`}>Mercado Solar</span>
        </Link>
        {/* Center menu */}
        <div className='flex items-center justify-center ml-[280px]'>
          <ul className='flex justify-between items-center gap-6 w-full'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>
                  <p className='text-nwhite'>{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Buscador */}
        <div>
          <input
            type='text'
            placeholder='Buscar'
            className='bg-nwhite rounded-full p-2'
          />
        </div>
        {/* user and cart */}
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-4'>
            <Link href='/login'>
              <p className='text-nwhite'>Iniciar Sesión</p>
            </Link>
            <Link href="/cart" className="mx-2">
              <div className="relative p-2 rounded-full bg-pyellow">
                <span className="absolute text-xs px-2 py-1 rounded-full font-bold -top-3 -right-3 bg-porange text-nwhite">
                  3
                </span>
                <IoCartOutline className="w-5 h-5 text-nwhite" />
              </div>
            </Link>
          </div>
          <button
          // onClick={ openSideMenu }
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-nwhite">
          Menú
          </button>
        </div>
        {/* Menu */}
      </div>
    </nav>
  )
}
