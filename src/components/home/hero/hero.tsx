'use client'
import React from 'react'
import { imageHero } from '@/utils/hero-img'
import ImageSlider from '@/components/ui/image-slider/ImageSlider'

export const Hero = () => {
  return (
    <article
      className=' h-auto w-full z-0'
    >
      <ImageSlider images={imageHero} />
    </article>
  )
}
