export const exchangeRate = 1240
export const convertToARS = (usd: number) => usd * exchangeRate
export const convertToUSD = (ars: number) => ars / exchangeRate
export const formatPrice = (price: number) => `$ ${price.toFixed(2)}`
export const formatPriceARS = (price: number) => {
  const arsPrice = convertToARS(price)
  return `$ ${arsPrice.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}
export const formatPriceUSD = (price: number) => `$ ${convertToUSD(price).toFixed(2)}`