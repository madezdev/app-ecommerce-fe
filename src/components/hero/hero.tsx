import React from 'react'
import ImageSlider from '../ui/image-slider/ImageSlider'
import { imageHero } from '@/utils/hero-img'

export const Hero = () => {
  return (
    <article
      className='absolute top-0 left-0 h-[500px] w-full z-0'
    >
      <ImageSlider images={imageHero} />
    </article>
  )
}
