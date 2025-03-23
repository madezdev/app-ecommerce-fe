'use client'
import React  from 'react'
import { Product } from '@/interface/product'
import { FavoriteButton } from '../ui/favorite-button/favoriteButton'
import { ImagesProductMobile } from './imagesProductMobile'
import { paragraph, titleFont } from '@/config/fonts'
import { ProductCharacteristics } from './characteristics'
import DownloadTechnicalSheet from './downloadTechnicalSheet'
import { formatPriceARS } from '@/constants/exchangeRate'
import QuantitySelect from '../ui/quantity-select/quantitySelect'
import Button from '../ui/button/button'
import { useExchangeRate } from '@/hooks/useExchangeRate'
import { ProductReviews } from './produtRewiew'
import UserReviewsSlider from '../ui/user-reviews-slider/UserReviewsSlider'
import { QuestionsAndAnswers } from './questionsAndAnswers'

interface Props {
  product: Product
  reviewsData: {
    averageRating: number
    totalReviews: number
    distribution: { stars: number, count: number }[]
  }
  userReviewsData: {
    id: string
    username: string
    rating: number
    comment: string
    date: string
  }[]
}

export const DetailForMobile = ({ product, reviewsData, userReviewsData }: Props) => {
  const dolarBlue = useExchangeRate()

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
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-start justify-between w-full'>
        <h2 className={`${titleFont.className} text-sblue text-balance`}>{product.title}</h2>
        <FavoriteButton />
      </div>
      <ImagesProductMobile images={product.images} />
      <div className='flex flex-col gap-4 w-full my-8'>
        <div className='flex flex-col mb-8'>
          <span className={`${paragraph.className} text-[28px] text-sgreen`}>
            {dolarBlue !== null ? formatPriceARS(product.price, dolarBlue) : '$'} <small>+ IVA</small>
          </span>
          <small className={`${paragraph.className} text-[16px] text-sgreen`}>{product.iva}% IVA</small>
        </div>
        <div>
          <p className={`${paragraph.className} text-[16px] text-sblue/50 pb-2`}>Disponibles: <span>{product.stock}</span></p>
          <QuantitySelect
            max={product.stock}
            value={1}
            onChangeAction={(newValue) => console.log(newValue)}
          />
        </div>

        {/* Botones alineados abajo */}
        <div className='flex flex-col md:flex-row gap-2 mt-auto'>
          <Button variant='primary' fullWidth onClick={() => console.log('Agregado al carrito')}>
            Agregar al carrito
          </Button>

          <Button variant='secondary' fullWidth onClick={() => console.log('Compra iniciada')}>
            Comprar
          </Button>
        </div>

      </div>

      <article className='w-full flex flex-col justify-between'>
        <ProductCharacteristics characteristics={formatCharacteristics(product)} title='Características del Producto'/>
        <div className='lg:w-1/2 flex flex-col items-center gap-4 mt-8 lg:mt-0'>
          <h5 className={`${titleFont.className} text-[18px] lg:text-[20px] text-sblue`}>Ficha técnica</h5>
          <DownloadTechnicalSheet  fileUrl='' fileName='ficha técnica'/>
        </div>
      </article>

      <article className='w-full mt-8'>
        <h5 className={`${titleFont.className} text-[18px] text-sblue mb-4`}>Descripción del Producto</h5>
        <p className={`${paragraph.className} text-[16px] text-sblue/80 text-balance`}>{product.description}</p>
      </article>
      <article className='w-full'>
        <QuestionsAndAnswers />
      </article>
      <article className='flex flex-col items-center gap-8 w-full  '>
        <ProductReviews
          averageRating={reviewsData.averageRating}
          totalReviews={reviewsData.totalReviews}
          distribution={reviewsData.distribution}
        />

        <UserReviewsSlider reviews={userReviewsData} />
      </article>
    </div>

  )
}
