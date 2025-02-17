'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { paragraph } from '@/config/fonts'
import { images } from '@/utils/info-footer'

const transitionDuration = 0.5 // Cambia este valor para modificar la duración de la transición

export default function ImageSlider () {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const slideDuration = 8000 // Cambia este valor para modificar la duración de cambio de imagen
    const interval = setInterval(() => {
      nextSlide()
    }, slideDuration)
    return () => clearInterval(interval)
  }, [index])

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className='relative flex flex-col justify-between items-center w-full max-w-[370px] h-[262px] mx-auto overflow-hidden shadow-lg border border-nwhite/50 p-4 rounded-md  backdrop-blur-sm bg-nwhite/20'>
      <AnimatePresence mode='wait'>
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].text}
          className='w-[120px] object-cover'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
        />
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        <motion.div
          className='p-3 mb-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
        >
          <p className={`${paragraph.className} text-[14px] text-white text-center`}>{images[index].text}</p>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-2 transform -translate-y-1/2 hover:bg-black hover:bg-opacity-50 p-2 rounded-full text-white '
      >
        <BiChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-2 transform -translate-y-1/2 hover:bg-black hover:bg-opacity-50 p-2 rounded-full text-white '
      >
        <BiChevronRight size={24} />
      </button>

      <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  )
}