import axios from 'axios'

const nextHttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_API_URL
})

nextHttpClient.interceptors.request.use((config) => {
  return config
})

export default nextHttpClient
