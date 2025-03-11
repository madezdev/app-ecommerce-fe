import { paragraph } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface Props {
  path: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const RowLink = ({ path, title, description, icon }: Props) => {
  return (
    <Link
      href={path}
      className='flex items-center justify-between gap-4 p-4 bg-nwhite rounded-lg w-full group'
    >
      <div className='border border-sgreen/50 p-3 rounded-full group-hover:scale-105 transition-transform delay-150 ease-in-out'>
        {icon}
      </div>
      <div className='flex flex-col gap-1 flex-1'>
        <p className={`${paragraph.className} text-[18px] text-sblue`}>{title}</p>
        <p className={`${paragraph.className} text-[16px] text-sblue/70`}>{description}</p>
      </div>
      <div className='p-2'>
        <IoIosArrowForward size='24'/>
      </div>
    </Link>
  )
}
