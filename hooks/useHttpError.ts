import { useState, useEffect, useCallback } from 'react'
import { AxiosInstance, isCancel } from 'axios'

import { HttpErrorData } from '@/types/http-error.types'

const useHttpError = (httpClient: AxiosInstance): [HttpErrorData | undefined, () => void] => {
  const [errorMessage, setErrorMessage] = useState<HttpErrorData>()

  useEffect(() => {
    const requestInterceptor = httpClient.interceptors.request.use((req) => {
      setErrorMessage(undefined)
      return req
    })
    const resInterceptor = httpClient.interceptors.response.use(
      (res) => res,
      (err) => {
        const status: number = err.response ? err.response.status : 500

        let errorMsg = ''
        if (err.response && err.response.data?.data) {
          errorMsg = Array.isArray(err.response.data?.data.message)
            ? err.response.data?.data.message[0]
            : err.response.data?.data.message
        } else if (err.response && err.response.data) {
          errorMsg = err.response.data.message
        } else {
          errorMsg = err.message
        }
        setErrorMessage({ status, message: errorMsg, isCancel: isCancel(err) })
        return Promise.reject(err)
      }
    )

    return () => {
      httpClient.interceptors.request.eject(requestInterceptor)
      httpClient.interceptors.response.eject(resInterceptor)
    }
  }, [httpClient.interceptors])

  const clearErrorMessage = useCallback(() => {
    setErrorMessage(undefined)
  }, [])

  return [errorMessage, clearErrorMessage]
}

export default useHttpError
