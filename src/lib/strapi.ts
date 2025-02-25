import axios from 'axios'

const { STRAPI_TOKEN, STRAPI_HOST } = process.env

export const strapiClient = axios.create({
  baseURL: `${STRAPI_HOST}/api/`,
  headers: {
    Authorization: `Bearer ${STRAPI_TOKEN}`,
  },
})