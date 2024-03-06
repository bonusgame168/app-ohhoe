import { SigninRequest, SignupRequestData } from '@/types/auth.type'
import nextHttpClient from '@/utils/nextHttpClient'

export const signin = (body: SigninRequest) => {
  const { username, password } = body
  const returnURL = `${window.location.origin}/signin?incorrect=true`
  const url = `${process.env.NEXT_PUBLIC_BONUS_GAME_API_URL}/redirect-login?username=${username}&password=${password}&return_url=${returnURL}`
  window.location.replace(url)
}

export const signup = async (body: SignupRequestData) => {
  const response = await nextHttpClient.post('/auth/signup', body)
  return response.data
}
