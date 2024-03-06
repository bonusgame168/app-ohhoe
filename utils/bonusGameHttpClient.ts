import axios from 'axios'

const bonusGameHttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BONUS_GAME_API_URL
})

bonusGameHttpClient.interceptors.request.use((config) => {
  config.headers['api-key'] = String(process.env.BONUS_GAME_API_KEY)

  return config
})

export default bonusGameHttpClient
