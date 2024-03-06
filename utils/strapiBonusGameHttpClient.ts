import axios from 'axios'

const strapiBonusGameHttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL
})

strapiBonusGameHttpClient.interceptors.request.use((config) => {
  return config
})

export default strapiBonusGameHttpClient
