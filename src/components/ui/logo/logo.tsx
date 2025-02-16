import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href='/'
      className='flex justify-center items-center w-[50px] h-[50px] lg:w-[280px] lg:h-[104px] ml-4 lg:ml-0 bg-nwhite rounded-full shadow-lg'>
      <Image
        src='/images/logo.png'
        width={240}
        height={240}
        alt='Mercado Solar'
        className='hidden lg:block'
      />
      <Image
        src='/images/icon-logo.png'
        width={70}
        height={70}
        alt='Mercado Solar'
        className='lg:hidden mb-3 ml-[2px]'
      />
    </Link>
  )
}
