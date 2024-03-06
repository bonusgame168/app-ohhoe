import { NextApiRequest, NextApiResponse } from "next"
import { AxiosError } from "axios"

import { HTTP_METHOD_POST } from "@/utils/constant.util"
import { SignupRequestData } from "@/types/auth.type"
import bonusGameHttpClient from "@/utils/bonusGameHttpClient"

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      phone,
      password,
      bank_transfer,
      bank_number,
      name,
      lastname,
      auto_bonus,
      line_account,
      ref,
    }: SignupRequestData = req.body

    const formData = new URLSearchParams()
    formData.append("phone", phone)
    formData.append("password", password)
    formData.append("bank_transfer", bank_transfer)
    formData.append("bank_number", bank_number)
    formData.append("name", name)
    formData.append("lastname", lastname)
    formData.append("auto_bonus", Number(auto_bonus).toString())
    // NOTE: append reference.
    const ref_account =
      ref && (ref === "11" || ref === "12")
        ? ref
        : String(process.env.BONUS_GAME_REFERRER_ACCOUNT_ID)
    formData.append("referrer_account_id", ref_account)

    if (line_account) {
      formData.append("line_account", line_account)
    }

    const response = await bonusGameHttpClient.post(
      "/api/user/register",
      formData
    )
    res.json(response.data)
  } catch (err) {
    const error = err as Error | AxiosError
    res.status(400).json({ success: false, message: error.message })
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query || !req.query["slug"]) {
    return res
      .status(405)
      .end(`Error: HTTP ${req.method} is not supported for ${req.url}`)
  }

  const action = req.query["slug"][0]
  if (req.method === HTTP_METHOD_POST && action === "signup") {
    return signup(req, res)
  } else {
    return res
      .status(405)
      .end(`Error: HTTP ${req.method} is not supported for ${req.url}`)
  }
}
