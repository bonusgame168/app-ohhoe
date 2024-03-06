import { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { Prompt } from '@next/font/google'
import { muiTheme } from '@/mui-theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import '@/styles/globals.css'
import Layout from '@/components/Common/Layout'
import ApiErrorDialog from '@/components/Common/ApiErrorDialog'
import useHttpError from '@/hooks/useHttpError'
import strapiBonusGameHttpClient from '@/utils/strapiBonusGameHttpClient'

const prompt = Prompt({ subsets: ['thai'], weight: ['200', '400', '700'], display: 'swap' })

export default function App({ Component, pageProps }: AppProps) {
  const [errorMessage, clearErrorMessage] = useHttpError(strapiBonusGameHttpClient)
  const [openDialog, setOpenDialog] = useState(false)

  const handleCloseDialog = () => {
    clearErrorMessage()
    setOpenDialog(false)
  }

  // NOTE: handler erorr from http
  useEffect(() => {
    if (errorMessage && !errorMessage.isCancel) {
      setOpenDialog(true)
    }
  }, [errorMessage])

  return (
    <>
      <ApiErrorDialog open={openDialog} onClose={handleCloseDialog} message={errorMessage?.message} />
      <ThemeProvider theme={muiTheme}>
        <main className={prompt.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThemeProvider>
    </>
  )
}
