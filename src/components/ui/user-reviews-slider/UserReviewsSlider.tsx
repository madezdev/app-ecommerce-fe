'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { StarFilledIcon } from '../icon/starFilled-icon'
import { StarHalfFilledIcon } from '../icon/starFilledHalf'
import { StarIcon } from '../icon/star-icon'

interface UserReview {
  id: string
  username: string
  rating: number   // Por ejemplo: 4.5, 3.7, etc.
  comment: string
  date: string    // Formato ISO o similar
}

interface UserReviewsSliderProps {
  reviews: UserReview[]
}

export default function UserReviewsSlider ({ reviews }: UserReviewsSliderProps) {
  const [index, setIndex] = useState(0)
  const transitionDuration = 0.5

  useEffect(() => {
    const slideDuration = 8000
    const interval = setInterval(() => {
      nextSlide()
    }, slideDuration)
    return () => clearInterval(interval)
  }, [index])

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const renderReview = (review: UserReview) => {
    // Cálculo de estrellas para la calificación
    const fullStars = Math.floor(review.rating)
    const hasHalfStar = review.rating - fullStars >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="py-4 px-10 bg-white rounded-lg border border-sblue/20 mx-auto">
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
  }

  return (
    <div className="relative flex flex-col justify-between items-center w-full max-w-[400px] lg:self-end  ">
      <AnimatePresence mode="wait">
        <motion.div
          key={reviews[index].id}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: transitionDuration }}
        >
          {renderReview(reviews[index])}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-2 transform -translate-y-1/2 hover:bg-gray-200 p-2 rounded-full"
      >
        <BiChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-2 transform -translate-y-1/2 hover:bg-gray-200 p-2 rounded-full"
      >
        <BiChevronRight size={24} />
      </button>

      {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div> */}
    </div>
  )
}
