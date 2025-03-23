import React from 'react'
import { Discount, ItemDiscounts } from './itemDiscounts'
import { discounts } from '@/dataBase/discount'

export const Discounts = async () => {

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
