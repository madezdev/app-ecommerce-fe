import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <main className={`container mx-auto ${className}`}>
      {children}
    </main>
  )
}
