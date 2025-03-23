'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Product } from '@/interface/product'
import { ProductCharacteristics } from './characteristics'
import DownloadTechnicalSheet from './downloadTechnicalSheet'
import { paragraph, titleFont } from '@/config/fonts'

interface Props {
  product: Product
}

export const Detail = ({ product }: Props) => {
  const { images } = product
  const [selectedImage, setSelectedImage] = useState(images[1] || images[0])
  const [zoomStyle, setZoomStyle] = useState({})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2)', // Puedes cambiar la escala si lo deseas
    })
  }

  const handleMouseLeave = () => {
    setZoomStyle({})
  }

  const formatCharacteristics = (product: Product) => {
    // Verifica si `specification` está definido y no está vacío
    if (!product.specification || product.specification.length === 0) {
      return [] // Retorna un array vacío si no hay especificaciones
    }

    const characteristicsObj = product.specification[0]

    // Verifica si `characteristicsObj` es un objeto válido
    if (!characteristicsObj || typeof characteristicsObj !== 'object') {
      return [] // Retorna un array vacío si no es un objeto válido
    }

    // Convierte el objeto en un array de características
    return Object.entries(characteristicsObj).map(([key, value]) => ({
      label: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()), // Convierte camelCase a texto legible
      value: typeof value === 'string' || typeof value === 'number' ? value : '',
    }))
  }

  return (
    <div className='flex flex-col items-center gap-8'>
      {/* Imagen Principal con efecto lupa */}
      <div
        className='w-auto h-[700px] border rounded-lg overflow-hidden relative'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={`/images/product/${selectedImage}`}
          width={900}
          height={700}
          alt='Producto'
          className='w-full h-full object-cover transition-transform duration-300 cursor-zoom-in'
          style={zoomStyle}
        />
      </div>

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
      <article className='w-full flex justify-between'>
        <ProductCharacteristics characteristics={formatCharacteristics(product)} title='Características del Producto'/>
        <div className='w-1/2 flex flex-col items-center gap-4'>
          <h5 className={`${titleFont.className} text-[20px] text-sblue`}>Ficha técnica</h5>
          <DownloadTechnicalSheet  fileUrl='' fileName='ficha técnica'/>
        </div>
      </article>
      <article className='w-full'>
        <h5 className={`${titleFont.className} text-[20px] text-sblue mb-4`}>Descripción del Producto</h5>
        <p className={`${paragraph.className} text-pretty text-[18px] text-sblue/80`}>{product.description}</p>
      </article>
    </div>
  )
}
