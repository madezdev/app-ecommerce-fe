import React from 'react'
import { titleFont } from '@/config/fonts'

interface Props {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  weight?: '100' | '400' | '500' | '700' | '900'
  color?: 'nwhite' | 'black' | 'ngrey' | 'sblue' | 'sgreen' | 'porange' | 'pyellow' | 'error'
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}

export const Title = ({ element, size, weight, color, children, className }: Props) => {

  return (
    <div className=''>
      {React.createElement(
        element ? element : 'h1',
        {
          className: `${titleFont.className} font-${weight ? weight : '400'} text-${size ? size : 'md'} text-${color ? color : 'ngrey'} ${className}`,
        },
        children
      )}
    </div>
  )
}
