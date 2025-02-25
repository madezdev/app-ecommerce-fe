import { IProductCard } from '@/interface/product-cards'
import { strapiClient } from './strapi'
const { STRAPI_HOST } = process.env

export async function getProductCars () {
  try {
    const response = await strapiClient.get('/product-cards?populate=img')

    if (!response.data || !response.data.data) {
      throw new Error('Invalid response structure')
    }

    return response.data.data.map((item: IProductCard & { img: { url: string } }) => {
      const { id, title, description, price, brand, supplierId, slug, img } = item

      // Verificar si img existe y tiene datos
      const imgUrl = img?.url ? `${STRAPI_HOST}${img.url}` : null

      return { id, title, description, price, brand, supplierId, slug, img: imgUrl }
    })
  } catch (error: unknown) {
    console.error('Error fetching product cards:', error)
    return []
  }
}