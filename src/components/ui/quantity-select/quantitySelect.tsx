'use client'
import { motion } from 'framer-motion'

interface QuantitySelectProps {
  min?: number;
  max?: number;
  value: number; // Eliminamos el valor por defecto para que sea obligatorio
  onChangeAction: (_value: number) => void; // Ahora es obligatorio
}

export default function QuantitySelect ({
  min = 1,
  max = 99,
  value,
  onChangeAction,
}: QuantitySelectProps) {
  const updateQuantity = (newValue: number) => {
    if (newValue >= min && newValue <= max) {
      onChangeAction(newValue) // Disparamos el evento hacia el padre
    }
  }

  return (
    <div className='flex items-center space-x-2'>
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => updateQuantity(value - 1)}
        className='px-3 py-1 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50'
        disabled={value <= min}
      >
        -
      </motion.button>

      <motion.span
        key={value}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className='w-10 text-center text-lg font-semibold'
      >
        {value}
      </motion.span>

      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => updateQuantity(value + 1)}
        className='px-3 py-1 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50'
        disabled={value >= max}
      >
        +
      </motion.button>
    </div>
  )
}
