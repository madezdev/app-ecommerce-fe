'use client'
import React from 'react'
import { StarFilledIcon } from '../ui/icon/starFilled-icon'
import { StarHalfFilledIcon } from '../ui/icon/starFilledHalf'
import { StarIcon } from '../ui/icon/star-icon'

interface UserReview {
  id: string
  username: string
  rating: number   // Por ejemplo: 4.5, 3.7, etc.
  comment: string
  date: string    // Fecha en formato ISO o similar
}

interface UserReviewsProps {
  reviews: UserReview[]
}

export const UserReviews = ({ reviews }: UserReviewsProps) => {
  return (
    <div className="space-y-4">
      {reviews.map(review => {
        // Calculamos cuántas estrellas llenas, media estrella y vacías se deben mostrar.
        const fullStars = Math.floor(review.rating)
        const hasHalfStar = review.rating - fullStars >= 0.5
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

        return (
          <div key={review.id} className="p-4 ">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-800">{review.username}</h3>
              <div className="flex items-center">
                {Array.from({ length: fullStars }).map((_, i) => (
                  <StarFilledIcon
                    key={`full-${review.id}-${i}`}
                    width="20"
                    height="20"
                    color="#FBBF24"
                  />
                ))}
                {hasHalfStar && (
                  <StarHalfFilledIcon
                    width="20"
                    height="20"
                    color="#FBBF24"
                  />
                )}
                {Array.from({ length: emptyStars }).map((_, i) => (
                  <StarIcon
                    key={`empty-${review.id}-${i}`}
                    width="20"
                    height="20"
                    color="#FBBF24"
                  />
                ))}
              </div>
            </div>
            <p className="mt-2 text-gray-600">{review.comment}</p>
            <div className="mt-2 text-sm text-gray-500">
              {new Date(review.date).toLocaleDateString()}
            </div>
          </div>
        )
      })}
    </div>
  )
}
