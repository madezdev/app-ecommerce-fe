const MARKUP = 0.30

export const convertToARS = (usd: number, dolarBlue: number) => usd * dolarBlue
export const convertToUSD = (ars: number, dolarBlue: number) => ars / dolarBlue
export const formatPrice = (price: number) => `$ ${price.toFixed(2)}`

export const formatPriceARS = (price: number, dolarBlue: number) => {
  const arsPrice = convertToARS(price, dolarBlue) * (1 + MARKUP)
  return `$ ${arsPrice.toLocaleString('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`
}

export const formatPriceUSD = (price: number) =>
  `USD ${(price * (1 + MARKUP)).toFixed(2)}`