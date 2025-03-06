'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface QuantitySelectProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
}

export default function QuantitySelect ({
  min = 1,
  max = 99,
  value = 1,
  onChange,
}: QuantitySelectProps) {
  const [quantity, setQuantity] = useState(value)

  const updateQuantity = (newValue: number) => {
    if (newValue >= min && newValue <= max) {
      setQuantity(newValue)
      onChange && onChange(newValue)
    }
  }

  return (
    <div className='flex items-center space-x-2'>
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => updateQuantity(quantity - 1)}
        className='px-3 py-1 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50'
        disabled={quantity <= min}
      >
        -
      </motion.button>

      <motion.span
        key={quantity}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className='w-10 text-center text-lg font-semibold'
      >
        {quantity}
      </motion.span>

      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => updateQuantity(quantity + 1)}
        className='px-3 py-1 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50'
        disabled={quantity >= max}
      >
        +
      </motion.button>
    </div>
  )
}
