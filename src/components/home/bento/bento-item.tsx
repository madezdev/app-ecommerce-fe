/* eslint-disable @next/next/no-img-element */
'use client'
import { paragraph, titleFont } from '@/config/fonts'
import React, { ReactNode } from 'react'

interface Props {
  className?: string;
  title: string;
  subtitle?: string;
  imageSlot?: string;
  contentSlot?: ReactNode;
  children: React.ReactNode;
}

export const BentoItem = ({ className, title, subtitle, children, contentSlot, imageSlot }: Props) => {
  return (
    <article
      className={`
        ${className} col-span-5 relative rounded-xl backdrop-blur-md
        border border-black/10 shadow-inner shadow-white/10 overflow-hidden group cursor-pointer
      `}
    >
      <div
        className="absolute bottom-0 top-0 z-10 h-full w-full
        bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80"
      />
      {
        imageSlot && (
          <img
            src={imageSlot}
            alt={subtitle}
            className="absolute bottom-0 left-4 top-4 z-10 h-auto w-[80px]"
          />
        )
      }

      {children}

      <div className="relative z-20 flex h-full select-none flex-col justify-end gap-1 p-4 text-lg md:p-6">
        <h2 className={ `${titleFont.className} mb-4 text-balance text-3xl font-semibold uppercase text-white`}>
          {title}
        </h2>
        {subtitle && (
          <h3 className={`${paragraph.className} -mt-4 mb-4 text-[20px] text-pyellow`}>
            {subtitle}
          </h3>
        )}

        {contentSlot}

      </div>
    </article>
  )
}
