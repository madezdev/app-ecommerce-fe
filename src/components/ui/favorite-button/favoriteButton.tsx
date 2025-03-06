'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HeartIcon } from '../icon/heart-icon'
import { HeartEmptyIcons } from '../icon/heart-empty-icon'

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <motion.button
      onClick={() => setIsFavorite(!isFavorite)}
      whileTap={{ scale: 0.8 }} // Reduce ligeramente el tamaño al hacer clic
      whileHover={{ scale: 1.1 }} // Aumenta ligeramente al pasar el cursor
      transition={{ type: 'spring', stiffness: 300 }}
      className='p-2 rounded-full'
    >
      <motion.div
        key={isFavorite ? 'filled' : 'empty'}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isFavorite ? (
          <HeartIcon width='24' height='24' color='#3582fb' />
        ) : (
          <HeartEmptyIcons width='24' height='24' color='#3582fb' />
        )}
      </motion.div>
    </motion.button>
  )
}
