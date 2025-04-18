import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { paragraph } from '@/config/fonts'
import ImageSlider from './slice'
import { menuItems } from '@/utils/navigations'
import { Paragraph } from '../font-style/paragraph'
import { RowInfo } from './row-info'

export const Footer = () => {
  //TODO: add social media
  return (
    <footer
      className='relative bg-sblue flex flex-col justify-between items-center pt-[40px] z-10 '
    >
      <div className='flex flex-col justify-center items-center gap-4 w-full container mx-auto px-4 md:px-0'>
        {/* logo */}
        <div className=' xl:flex xl:self-start justify-center items-center gap-4'>
          <Link href='/'
            className='flex justify-center items-center p-4 bg-nwhite rounded-full shadow-lg'>
            <Image
              src='/images/logo.png'
              width={240}
              height={240}
              alt='Mercado Solar'
              className=''
            />
          </Link>
          {/* Information */}
          <div className='max-w-[600px] mt-4 xl:mt-0'>
            <p className={` ${paragraph.className} text-nwhite text-[16px] lg:text-[20px] text-center xl:text-left text-pretty`}>
            Mercado Solar es una plataforma de comercio electrónico que permite a los usuarios comprar productos de energía solar.
            </p>
          </div>
          {/* TODO: add social media */}
        </div>
        <div className='lg:hidden'>
          <ImageSlider />
        </div>
        <div className='hidden lg:block w-full'>
          <RowInfo />
        </div>
        {/* subscription */}
        <div className='flex flex-col xl:flex-row gap-4 justify-center lg:justify-between items-center bg-sgreen w-full rounded-[16px] p-4'>
          <div className='flex justify-center items-center lg:justify-start gap-4 w-full flex-grow'>
            <Image
              src='/images/mail.svg'
              width={40}
              height={40}
              alt='Mercado Solar'
              className=''
            />
            <p className='text-nwhite text-[20px]'>Suscríbete a nuestro boletín.</p>
          </div>
          <form className='flex flex-col md:flex-row md:flex-shrink justify-center items-center gap-4 w-full'>
            <input
              type='email'
              required
              placeholder='Correo electrónico'
              className='w-full xl:w-[400px] h-[40px] bg-nwhite rounded-full pl-[40px] lg:pr-[20px] ml-4 text-ngrey'
            />
            <button
              className='w-full md:w-[200px] h-[40px] bg-porange rounded-full mt-4 md:mt-0'
              type='submit'
            >
              <span className='text-nwhite text-[14px]'>
                Suscribirse
              </span>
            </button>
          </form>
        </div>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-stretch gap-4 w-full'>
          {/* card btn repentance */}
          <div className='w-full flex flex-col justify-center items-center flex-1 border border-nwhite/50 p-4 rounded-md  backdrop-blur-sm bg-nwhite/20'>
            <p className='text-nwhite text-[14px]'>Boton de arrepentimiento</p>
            <button>
              <span className='text-black text-[14px]'>
              Cancelar compra
              </span>
            </button>
          </div>
          {/* card btn consumer protection */}
          <div className='w-full flex flex-col justify-center items-center flex-1 border border-nwhite/50 p-4 rounded-md backdrop-blur-sm bg-nwhite/20'>
            <p className='text-nwhite text-[14px]'>Conocé las normas que aplican cuando compras</p>
            <button>
              <span className='text-black text-[14px]'>
            Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor
              </span>
            </button>
          </div>

        </div>
      </div>
      <div className='border border-nwhite/50 w-full my-4'/>
      {/* Navigation */}
      <div className='flex justify-center items-center gap-4'>
        <ul className='flex justify-center items-center gap-4'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.url} >
                <Paragraph size='lg' color='nwhite' className='hover:text-porange focus:text-sblue hover:scale-105 transition-all duration-150'>{item.title}</Paragraph>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center items-center bg-pyellow/50 w-full mt-4 p-2'>
        <span className='text-[14px] text-ngrey'>Copyright © 1999-2025 MercadoSolar.</span>
      </div>
    </footer>
  )
}
