'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

interface AvatarProps {
  img?: string
  name: string
  lastname?: string
  radius?: number
}

export const Avatar = ({ img, name, lastname, radius }: AvatarProps) => {
  const circleRadius = radius ?? 30
  const textX = circleRadius
  const textY = circleRadius + circleRadius / 4
  const fontSize = circleRadius / 1.5

  const getInitials = (name: string, lastname: string) => {
    let chartName = name?.split(' ')[0].charAt(0)
    let chartLastname = lastname?.split(' ')[0].charAt(0)
    let initials = chartName + chartLastname
    return initials.toUpperCase()
  }

  useEffect(() => { }, [img, name, circleRadius, textX, textY, fontSize])

  return (
    <>
      {img ? (
        <Image
          src={img}
          alt='avatar'
          width={circleRadius * 2}
          height={circleRadius * 2}
          className='object-cover object-center h-full w-full rounded-full border-2 border-primary shadow-lg'
        />
      ) : (
        <svg width={circleRadius * 2} height={circleRadius * 2}>
          <circle
            cx={circleRadius}
            cy={circleRadius}
            r={circleRadius}
            fill='#D4D4D4'
          />
          <text
            x={textX}
            y={textY}
            textAnchor='middle'
            fill='#2f595A'
            style={{ fontSize: `${fontSize}px` }}
          >
            {getInitials(name, lastname ?? '')}
          </text>
        </svg>
      )}
    </>
  )
}
