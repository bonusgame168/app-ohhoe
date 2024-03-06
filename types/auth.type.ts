export interface SignupRequestData {
  phone: string
  bank_transfer: string
  bank_number: string
  name: string
  lastname: string
  password: string
  auto_bonus: boolean
  line_account?: string
  ref?: string
}

export interface SigninRequest {
  username: string
  password: string
}
