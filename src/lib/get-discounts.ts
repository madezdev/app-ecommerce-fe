/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import { strapiClient } from './strapi'
const { STRAPI_HOST } = process.env

export async function getDiscounts () {
  return strapiClient('discounts?fields[0]=title&fields[1]=description&populate[img][fields][0]=url')
    .then((res) => {
      return res.data.map((prod: any) => {
        const { title, description, img: imgUrl } = prod

        const img = `${STRAPI_HOST}${imgUrl.url}`
        return { title, description, img }
      })
    })
    .catch((error) => console.error('Error fetching:', error))
}