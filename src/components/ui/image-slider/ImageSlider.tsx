'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

interface Props {
  images: { src: string, text: string }[]
  transitionDuration?: number
}

export default function ImageSlider ({ images, transitionDuration = 0.2 }: Props) {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const slideDuration = 5000 // Cambia este valor para modificar la duración de cambio de imagen
    const interval = setInterval(() => {
      nextSlide()
    }, slideDuration)
    return () => clearInterval(interval)
  }, [index])

  return (
    <div className='relative flex flex-col justify-between items-center w-full h-auto overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].text}
          className=' object-cover object-center w-full h-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
        />
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