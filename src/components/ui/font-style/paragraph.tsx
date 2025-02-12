import { paragraph } from '@/config/fonts'
import React from 'react'

interface Props {
  children: React.ReactNode
  weight?: '100' | '400' | '500' | '700' | '900'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  color?: 'nwhite' | 'black' | 'ngrey' | 'sblue' | 'sgreen' | 'porange' | 'pyellow' | 'error' | 'currentColor'
  className?: string
}

export const Paragraph = ({ children, weight, size, color, className }: Props) => {
  return (
    <p className={`${paragraph.className} ${weight ? `font-${weight}` : 'font-400'} ${size ? `text-${size}` : 'text-md'} ${color ? `text-${color}` : 'text-ngrey'} ${className}`}>
      {children}
    </p>
  )
}
