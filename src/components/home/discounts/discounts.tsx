import React from 'react'
import { Discount, ItemDiscounts } from './itemDiscounts'
import { getDiscounts } from '@/lib/get-discounts'

export const Discounts = async () => {
  const discounts = await getDiscounts()

  return (
    <article>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
        {discounts.map((discount: Discount) => (
          <ItemDiscounts key={discount.title} {...discount} />
        ))}
      </div>
    </article>
  )
}
