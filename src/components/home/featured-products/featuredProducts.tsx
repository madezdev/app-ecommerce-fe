'use client'
import React, { useRef, useState, useEffect } from 'react'
import { ProductCard } from '@/components/product-card/product-card'
import { IProductCard } from '@/interface/product-cards'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { initialData } from '@/dataBase/seedProduct'
import { useExchangeRate } from '@/lib/get-exchangeRate'
import { useDolarStore } from '@/store/dolar.store'

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<IProductCard[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const dollarBlue = useExchangeRate()
  const setDollarBlue = useDolarStore((state) => state.setDolarBlue)

  useEffect(() => {
    if (dollarBlue.exchangeRate) {
      setDollarBlue(dollarBlue.exchangeRate)
    }
  }, [dollarBlue.exchangeRate, setDollarBlue])

  useEffect(() => {
    const fetchProducts = async () => {
      const outstanding = initialData.products.filter((prod) => prod.price.outstanding)
      const productCard = outstanding.map((prod) => ({
        slug: prod.slug,
        title: prod.title,
        description: prod.description,
        brand: prod.brand,
        price: prod.price.price,
        img: prod.images[0]
      }))
      setProducts(productCard)
    }
    fetchProducts()
  }, [])

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft)
      const newMaxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth
      if (newMaxScroll !== maxScroll) {
        setMaxScroll(newMaxScroll)
      }
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <article className='w-full relative mt-4'>
      {scrollLeft > 0 && (
        <button
          className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full'
          onClick={() => scroll('left')}
        >
          <BiChevronLeft size={30} />
        </button>
      )}

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className='flex gap-4 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-4 py-2'
      >
        {products.map((p) => (
          <div key={p.slug} className='snap-center shrink-0 lg:shrink w-4/5 sm:w-1/3 lg:w-full flex justify-center'>
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {scrollLeft < maxScroll && (
        <button
          className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full'
          onClick={() => scroll('right')}
        >
          <BiChevronRight size={30} />
        </button>
      )}
    </article>
  )
}
