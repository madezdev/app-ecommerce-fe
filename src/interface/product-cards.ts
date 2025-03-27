export interface IProductCard {
  id?: number
  supplierId?: string
  slug: string
  title: string
  description: string
  brand: string
  price: number
  img: string
  active?: boolean
  outstanding?: boolean
  category?: number
  subCategory?: number
}