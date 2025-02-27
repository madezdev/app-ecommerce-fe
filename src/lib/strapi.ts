const { STRAPI_TOKEN, STRAPI_HOST } = process.env

export const strapiClient = ( url: string) => {
  return fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error fetching:', error))
}