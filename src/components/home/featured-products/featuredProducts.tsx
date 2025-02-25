import React from 'react'
import { ProductCard } from '@/components/product-card/product-card'
import { getProductCars } from '@/lib/get-product-cars'
import { IProductCard } from '@/interface/product-cards'

export const FeaturedProducts = async () => {
  const data: IProductCard[] = await getProductCars() as IProductCard[]

  return (
    <article className='w-full flex items-center justify-center gap-4 flex-wrap'>
      {
        data.map((p: IProductCard) => (
          <ProductCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            description={p.description}
            brand={p.brand}
            price={p.price}
            img={p.img}
          />
        ))
      }
    </article>
  )
}