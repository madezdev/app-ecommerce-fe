'use client'
import React from 'react'
import { StarFilledIcon } from '../ui/icon/starFilled-icon'
import { StarHalfFilledIcon } from '../ui/icon/starFilledHalf'
import { StarIcon } from '../ui/icon/star-icon'
import { titleFont } from '@/config/fonts'

interface RatingDistribution {
  stars: number
  count: number
}

interface ProductReviewsProps {
  averageRating: number    // Puede tener decimales, por ejemplo 4.3 o 4.5
  totalReviews: number
  distribution: RatingDistribution[]  // Ejemplo: [{ stars: 5, count: 10 }, { stars: 4, count: 2 }, ...]
}

export function ProductReviews ({
  averageRating,
  totalReviews,
  distribution,
}: ProductReviewsProps) {
  // Redondeamos el promedio a 1 decimal
  const rating = Math.round(averageRating * 10) / 10

  // Determinar la cantidad de estrellas llenas, media estrella y vacías
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating - fullStars >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="w-[400px]">
      <p className={`${titleFont.className} text-[20px] text-sblue py-2`}>Opiniones sobre el producto</p>
      {/* Sección Promedio y Estrellas */}
      <div className="flex items-center mb-4">
        <p className="text-3xl font-bold text-blue-500 mr-2">{rating}</p>
        <div className="flex items-center">
          {/* Estrellas llenas */}
          {Array.from({ length: fullStars }).map((_, i) => (
            <StarFilledIcon
              key={`full-${i}`}
              width="24"
              height="24"
              color="#3B82F6"
            />
          ))}

          {/* Media estrella */}
          {hasHalfStar && (
            <StarHalfFilledIcon
              width="24"
              height="24"
              color="#3B82F6"
            />
          )}

          {/* Estrellas vacías */}
          {Array.from({ length: emptyStars }).map((_, i) => (
            <StarIcon
              key={`empty-${i}`}
              width="24"
              height="24"
              color="#3B82F6"
            />
          ))}
        </div>
      </div>

      {/* Cantidad total de reseñas */}
      <div className="text-sm text-gray-600 mb-4">
        {totalReviews} {totalReviews === 1 ? 'reseña' : 'reseñas'}
      </div>

      {/* Distribución de calificaciones */}
      <div className="space-y-2">
        {distribution
          .sort((a, b) => b.stars - a.stars)
          .map(({ stars, count }) => {
            const percentage =
              totalReviews > 0 ? (count / totalReviews) * 100 : 0
            return (
              <div key={stars} className="flex items-center">
                <span className="w-6 text-sm text-gray-700">{stars}</span>
                <StarFilledIcon width="16" height="16" color="#3B82F6" />
                <div className="flex-1 bg-gray-200 rounded h-2 relative mx-2">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">{count}</span>
              </div>
            )
          })}
      </div>
    </div>
  )
}
