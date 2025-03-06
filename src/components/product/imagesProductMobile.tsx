'use client'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  images: string[]
}

export const ImagesProductMobile = ({ images }: Props) => {

  const [selectedImage, setSelectedImage] = useState(images[1] || images[0])
  return (
    <div className='flex flex-col items-center gap-8'>
      <Image
        src={`/images/product/${selectedImage}`}
        width={900}
        height={700}
        alt='Producto'
        className='w-full h-full object-cover transition-transform duration-30 cursor-none rounded-[8px]'
      />

      {/* Miniaturas (ocultando la imagen en la posición 0) */}
      <div className='flex gap-2'>
        {images.slice(1).map((img, index) => (
          <button
            key={index + 1} // Se suma 1 para evitar duplicados de clave
            className={`w-16 h-16 border rounded-lg overflow-hidden ${
              selectedImage === img ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={`/images/product/${img}`}
              width={64}
              height={64}
              alt={`Miniatura ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </button>
        ))}
      </div>
    </div>
  )
}
