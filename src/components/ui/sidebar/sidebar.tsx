'use client'
import React from 'react'
import { useUIStore } from '@/store/sidebar.store'
import clsx from 'clsx'
import Link from 'next/link'
import { IoBagHandleOutline, IoBookOutline, IoChevronForward, IoCloseCircleOutline, IoEnterOutline, IoHeartOutline, IoHomeOutline, IoListOutline, IoMailOutline, IoPower, IoSearchOutline } from 'react-icons/io5'
import { PiSolarPanelLight } from 'react-icons/pi'
import { paragraph, titleFont } from '@/config/fonts'
import { CiCalculator1 } from 'react-icons/ci'
import { Avatar } from '../avatar'

const itemsMenu = [
  {
    icon: <IoSearchOutline size={ 20 } className='text-[#333333]' />,
    title: 'Buscar',
    href: '/',
    role: 1
  },
  {
    icon: <IoHomeOutline size={ 20 } className='text-[#333333]'/>,
    title: 'Inicio',
    href: '/',
    role: 1
  },
  {
    icon: <IoEnterOutline size={ 20 } className='text-[#333333]'/>,
    title: 'Ingresar',
    href: '/',
    role: 1
  },
  {
    icon: <IoBookOutline size={ 20 } className='text-[#333333]'/>,
    title: 'Blog',
    href: '/',
    role: 1
  },
  {
    icon: <IoMailOutline size={ 20 } className='text-[#333333]'/>,
    title: 'Contacto',
    href: '/',
    role: 1
  },
  {
    icon: <PiSolarPanelLight size={ 20 } className='text-[#333333]'/>,
    title: 'Productos',
    href: '/'
  },
  {
    icon: <IoListOutline size={ 20 } className='text-[#333333]'/>,
    title: 'Categorías',
    href: '/',
    role: 1
  },
  {
    icon: <CiCalculator1 size={ 20 } className='text-[#333333]'/>,
    title: 'Calculadora',
    href: '/',
    role: 1
  },
  {
    icon: <IoBagHandleOutline size={ 20 } className='text-[#333333]'/>,
    title: 'Mis compras',
    href: '/',
    role: 2
  },
  {
    icon: <IoHeartOutline size={ 20 } className='text-[#333333]'/>,
    title: 'Favoritos',
    href: '/',
    role: 2
  }
]

export const Sidebar = () => {const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen )
  const closeMenu = useUIStore( state => state.closeSideMenu )

  return (
    <div>

      {/* Background black */ }
      {
        isSideMenuOpen && (
          <div
            className='fixed top-0 left-0 w-screen h-screen z-30 bg-black opacity-30'
          />

        )
      }

      {/* Blur */ }
      {
        isSideMenuOpen && (
          <div
            onClick={ closeMenu }
            className='fade-in fixed top-0 left-0 w-screen h-screen z-30 backdrop-filter backdrop-blur-sm'
          />

        )
      }

      {/* Sidemenu */ }
      <nav
        className={
          clsx(
            'fixed flex flex-col justify-between p-5 right-0 top-0 w-[320px] h-screen bg-[#F8FAFC] z-50 shadow-2xl transform transition-all duration-300 rounded-tl-xl rounded-bl-xl',
            {
              'translate-x-full': !isSideMenuOpen
            }
          )
        }>

        <IoCloseCircleOutline
          size={ 30 }
          className='absolute top-5 right-5 cursor-pointer text-[#333333]/50 hover:scale-105 active:scale-95 transition-all'
          onClick={ () => closeMenu() }
        />
        <div className='flex items-center gap-2'>
          <Avatar name={'Martin'} lastname={'Hernandez'} radius={20} />
          <div className='flex flex-col justify-start items-start'>
            <span className={`${titleFont.className} text-[18px]`}>Martin Hernandez</span>
            <button
              className='flex items-center gap-1 text-[#333333]/50 hover:text-[#333333] transition-all'
            >
              <small className='text-ngrey/70'>My perfil</small>
              <IoChevronForward />
            </button>
          </div>
        </div>

        {/* Menú */ }
        <div className='flex-1'>
          <ul className='mt-10 flex flex-col gap-3'>
            {
              itemsMenu.map((item, index) => (
                <li
                  key={ index }
                  className={` flex items-center gap-2 hover:bg-pyellow/50 p-1 rounded transition-all delay-50 cursor-pointer hover:shadow-md active:shadow-none active:scale-95 first:lg:hidden`}
                  onClick={ () => closeMenu() }
                >
                  { item.icon }
                  <span className={`${paragraph.className} text-ngrey/80`}>{ item.title }</span>
                </li>
              ))
            }
          </ul>

        </div>

        {/* Line Separator */ }
        <div className='w-full h-px bg-gray-200 my-10' />

        <Link
          href='/'
          className='flex items-center gap-2 hover:bg-pyellow/50 p-1 rounded transition-all cursor-pointer '
        >
          <IoPower
            size={ 20 } />
          <span className={`${paragraph.className} text-ngrey/80`}>Salir</span>
        </Link>
      </nav>

    </div>
  )
}
