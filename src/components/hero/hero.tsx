import React from 'react'
import ImageSlider from '../ui/image-slider/ImageSlider'
import { imageHero } from '@/utils/hero-img'

export const Hero = () => {
  return (
    <article
      className=' h-auto w-full z-0'
    >
      <ImageSlider images={imageHero} />
    </article>
  )
}
