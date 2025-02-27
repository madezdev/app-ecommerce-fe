import { getExchangeRate } from '@/lib/get-exchangeRate'
const MARKUP = 0.35
const exchangeRate = await getExchangeRate()
const dolarBlue = exchangeRate.blue.ask
export const convertToARS = (usd: number) => usd * dolarBlue
export const convertToUSD = (ars: number) => ars / dolarBlue
export const formatPrice = (price: number) => `$ ${price.toFixed(2)}`
export const formatPriceARS = (price: number) => {
  const arsPrice = convertToARS(price) * (1 + MARKUP)
  return `$ ${arsPrice.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}
export const formatPriceUSD = (price: number) => `$ ${convertToUSD(price).toFixed(2)} * ${MARKUP}`