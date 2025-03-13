/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import { strapiClient } from './strapi'
const { STRAPI_HOST } = process.env

export async function getProductCars () {
  return strapiClient('product-cards?fields[0]=title&fields[1]=description&fields[2]=brand&fields[3]=price&fields[4]=slug&fields[5]=supplierId&fields[6]=category&fields[7]=active&fields[8]=outstanding&populate[img][fields][0]=url&fields[9]=type')
    .then((res) => {
      return res.data.map((prod: any) => {
        const { title, description, brand, price, slug, img: imgUrl, active, outstanding, type, category } = prod

        const img = imgUrl.map((imgObj: any) => `${STRAPI_HOST}${imgObj.url}`)
        return { title, description, brand, price, slug, img, active, outstanding, type, category }
      })
    })
    .catch((error) => console.error('Error fetching:', error))
}