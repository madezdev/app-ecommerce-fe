/* eslint-disable @typescript-eslint/no-explicit-any */
import { strapiClient } from './strapi'
const { STRAPI_HOST } = process.env

export async function getProductCars () {
  return strapiClient('product-cards?fields[0]=title&fields[1]=description&fields[2]=brand&fields[3]=price&fields[4]=slug&fields[5]=supplierId&fields[6]=category&fields[7]=active&fields[8]=outstanding&populate[img][fields][0]=url')
    .then((res) => {
      return res.data.map((prod: any) => {
        const { title, description, brand, price, slug, img: imgUrl, active, outstanding } = prod
        console.log('imgUrl', imgUrl)

        const img = imgUrl.map((imgObj: any) => `${STRAPI_HOST}${imgObj.url}`)
        return { title, description, brand, price, slug, img, active, outstanding }
      })
    })
    .catch((error) => console.error('Error fetching:', error))
}