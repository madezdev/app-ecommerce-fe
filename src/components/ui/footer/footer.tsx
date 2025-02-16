import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { paragraph } from '@/config/fonts'
import ImageSlider from './slice'

export const Footer = () => {
  return (
    <footer
      className=' bg-sblue flex flex-col justify-between items-center py-[40px] lg:py-[80px]'
    >
      <div className='flex flex-col justify-center items-center gap-4 w-full px-[40px]'>
        {/* logo */}
        <div className=' '>
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
        </div>
        {/* Informations */}
        <div>
          <p className={` ${paragraph.className} text-nwhite text-[16px] text-center`}>
            Mercado Solar es una plataforma de comercio electrónico que permite a los usuarios comprar productos de energía solar.
          </p>
        </div>
        <div>
          <ImageSlider />
        </div>
        {/* subscription */}
        <div className='flex flex-col justify-center items-center bg-sgreen w-full rounded-[16px] p-4'>
          <div className='flex justify-center items-center'>
            <Image
              src='/images/mail.svg'
              width={40}
              height={40}
              alt='Mercado Solar'
              className=''
            />
            <p className='text-nwhite text-[20px]'>Suscríbete a nuestro boletín.</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <input
              type='text'
              placeholder='Correo electrónico'
              className='w-[300px] h-[40px] bg-nwhite rounded-full pl-[40px] lg:pr-[20px] ml-4 text-ngrey'
            />
            <button
              className='w-[300px] h-[40px] bg-porange rounded-full mt-4'
            >
              <span className='text-nwhite text-[14px]'>
                Suscribirse
              </span>
            </button>
          </div>
        </div>
        {/* social media */}

        {/* card btn repentance */}
        <div className='w-full flex flex-col justify-center items-center border border-nwhite/50 p-4 rounded-md  backdrop-blur-sm bg-nwhite/20'>
          <p className='text-nwhite text-[14px]'>Boton de arrepentimiento</p>
          <button>
            <span className='text-black text-[14px]'>
              Cancelar compra
            </span>
          </button>
        </div>
        {/* card btn consumer protection */}
        <div className='w-full flex flex-col justify-center items-center border border-nwhite/50 p-4 rounded-md backdrop-blur-sm bg-nwhite/20'>
          <p className='text-nwhite text-[14px]'>Conocé las normas que aplican cuando compras</p>
          <button>
            <span className='text-black text-[14px]'>
            Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
