'use client'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { IoMenu, IoSearch } from 'react-icons/io5'
import { PiShoppingCartSimple } from 'react-icons/pi'
import { Paragraph } from '../font-style/paragraph'
import { useUIStore } from '@/store/sidebar.store'
import { Logo } from '../logo/logo'
import { motion } from 'framer-motion'

const menuItems = [
  {
    title: 'Productos',
    children: [
      { title: 'FotoVoltaico', url: '/products/photovoltaic' },
      { title: 'Termotanques solares', url: '/products/solar-heater' },
      { title: 'Climatización', url: '/products/climatisation' },
      { title: 'Bombas solares', url: '/products/pump' },
    ]
  },
  {
    title: 'Blog',
    url: '/quote',
  },
  {
    title: 'Calculadora',
    url: '/calculator',
  }
]

export const TopMenu = () => {
  const openSideMenu = useUIStore(state => state.openSideMenu)
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Cerrar el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className='relative flex justify-center items-center bg-transparent w-full gl:pl-[180px] z-20'>
      <div className='flex justify-between items-center w-full h-[76px] ml-[20px] bg-sgreen rounded-tl-full rounded-bl-full'>
        <div>
          <Logo />
        </div>

        <div className='hidden xl:flex'>
          <ul className='flex justify-center items-center space-x-6'>
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                {item.children ? (
                  <div ref={dropdownRef}>
                    <button
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className="cursor-pointer focus:outline-none"
                    >
                      <Paragraph size='lg' color='nwhite' className='hover:text-sblue focus:text-sblue hover:scale-105 transition-all duration-150'>
                        {item.title}
                      </Paragraph>
                    </button>

                    {openDropdown && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 min-w-[240px] max-w-[400px] bg-white shadow-lg rounded-md overflow-hidden z-50"
                      >
                        {item.children.map((child, idx) => (
                          <li key={idx}>
                            <Link
                              href={child.url || '/'}
                              className="block px-4 py-2 text-ngrey hover:bg-gray-100 transition-all"
                              onClick={() => setOpenDropdown(false)} // 🔹 Cierra el menú al hacer clic
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                ) : (
                  <Link href={item.url ?? '/'}>
                    <Paragraph size='lg' color='nwhite' className='hover:text-sblue focus:text-sblue hover:scale-105 transition-all duration-150'>
                      {item.title}
                    </Paragraph>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className='relative flex '>
          <input
            type='text'
            placeholder='Buscar'
            className='w-[170px] md:w-[300px] lg:w-[400px] h-[40px] bg-nwhite rounded-full pl-[40px] lg:pr-[20px] ml-4 text-ngrey'
          />
          <IoSearch className='absolute top-[50%] left-[30px] transform -translate-y-1/2 text-ngrey' />
        </div>

        <div className='flex justify-end items-center gap-2'>
          <div className='flex justify-end items-center gap-4 lg:mr-[20px]'>
            <Link href='/auth/login'>
              <Paragraph size='lg' color='nwhite' className='hidden lg:block hover:text-sblue focus:text-sblue hover:scale-105 transition-all duration-150'>Usuario</Paragraph>
            </Link>
            <button onClick={openSideMenu}>
              <IoMenu className='lg:hidden w-[40px] h-[40px] text-nwhite' />
              <Paragraph size='lg' color='nwhite' className='hidden lg:block hover:text-sblue focus:text-sblue hover:scale-105 transition-all duration-150'>Menu</Paragraph>
            </button>
          </div>

          <div className='mr-[20px] xl:mr-[80px]'>
            <Link href="/cart" className="mx-2">
              <div className="relative">
                <span className="absolute text-xs px-2 py-1 rounded-full font-bold -top-2 -right-2 bg-sblue text-white">
                  3
                </span>
                <div className='rounded-full bg-porange p-2'>
                  <PiShoppingCartSimple className="w-[24px] h-[24px] text-nwhite hover:text-pyellow focus:text-sblue hover:scale-105 transition-all duration-150" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
