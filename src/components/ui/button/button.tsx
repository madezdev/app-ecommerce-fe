'use client'
import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'action' | 'danger';
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  disabled = false,
}: AnimatedButtonProps) {
  // Estilos según el tipo de botón
  const variants = {
    primary: 'bg-sgreen text-nwhite',
    secondary: 'bg-sblue text-nwhite',
    action: 'bg-[#3582fb] text-nwhite',
    danger: 'bg-red-500 text-white',
  }

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ opacity: 0.8 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]} 
        py-3 px-6 text-[16px] rounded-md 
        ${fullWidth ? 'w-full' : 'w-auto'}
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {children}
    </motion.button>
  )
}
