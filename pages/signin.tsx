import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { NextPage } from 'next'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Link from 'next/link'

import * as authApiService from '@/services/authApi.service'
import ApiErrorDialog from '@/components/Common/ApiErrorDialog'

interface SigninForm {
  username: string
  password: string
}

const Signup: NextPage = () => {
  const router = useRouter()
  const { incorrect } = router.query
  const [openDialog, setOpenDialog] = useState(true)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SigninForm>({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  useEffect(() => {
    setOpenDialog(String(incorrect) === 'true')
  }, [incorrect])

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleSubmitForm = (data: SigninForm) => {
    authApiService.signin(data)
  }

  return (
    <>
      <ApiErrorDialog
        open={openDialog}
        onClose={handleCloseDialog}
        message='รหัสผ่านของท่านไม่ถูกต้อง'
      />
      <div className='page-wrapper bg-primary bg-[url("/images/background-signup.webp")] bg-no-repeat bg-cover flex items-center'>
        <Container className='xl:p-0'>
          <Grid container justifyContent='center'>
            <Grid
              item
              xl={5}
              xs={12}
              className='flex items-center justify-center'
            >
              <Card
                sx={{ px: 2, py: 4 }}
                className='text-white bg-blur-2xl shadow-[0 0 15px 0 #210231] bg-[rgba(0,0,0,0.3)] flex-1'
              >
                <Box className='text-center'>
                  <Image
                    src='/images/header-logo.webp'
                    alt='header-logo'
                    width={150}
                    height={70}
                    priority
                  />
                </Box>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                  <Box className='flex flex-col' sx={{ gap: 2, p: 2 }}>
                    <Controller
                      name='username'
                      control={control}
                      rules={{ required: 'โปรดระบุ ยูส/เบอร์โทรศัพท์' }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          error={!!errors.username}
                          helperText={errors.username?.message}
                          className='AuthTextField'
                          label='ยูส/เบอร์โทรศัพท์'
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                        />
                      )}
                    />
                    <Controller
                      name='password'
                      control={control}
                      rules={{ required: 'โปรดระบุ รหัสผ่าน' }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type='password'
                          error={!!errors.password}
                          helperText={errors.password?.message}
                          className='AuthTextField'
                          label='รหัสผ่าน'
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                          autoComplete='current-password'
                        />
                      )}
                    />
                    <Button
                      aria-label='signin'
                      variant='contained'
                      color='primary'
                      size='large'
                      className='submit-button block w-full'
                      type='submit'
                    >
                      เข้าสู่ระบบ
                    </Button>
                    <Typography
                      variant='h6'
                      className='text-center xl:text-right text-xl md:text-xl mt-5 xl:mt-2'
                    >
                      {/* <a
                        href='https://membonusgame.autobot168.app/forget-password'
                        target='_blank'
                        rel='noreferrer'
                        className='ml-2 brown-text pr-2'
                      >
                        ลืมรหัสผ่าน ?
                      </a> */}
                    </Typography>
                  </Box>
                </form>
              </Card>
            </Grid>
            <Grid
              item
              xl={7}
              xs={12}
              container
              sx={{ px: 2 }}
              className='flex-col-reverse xl:flex-col items-center justify-center xl:items-end'
            >
              <Image
                src='/images/ic-qilin.webp'
                alt='rabit'
                priority
                width={400}
                height={400}
                className='max-w-full object-contain h-auto'
              />
              <Typography
                variant='h4'
                className='italic text-white text-center xl:text-right break-words text-xl md:text-4xl'
              >
                ยินดีต้อนรับสู่
                <span className='ml-2 brown-text pr-2'>
                  OHHOE
                </span>
              </Typography>
              <Typography
                variant='h6'
                className='text-white text-center xl:text-right text-xl md:text-2xl mt-10 xl:mt-2'
              >
                หากคุณยังไม่มีบัญชี
                <Link href='signup' className='ml-2 brown-text pr-2'>
                  สมัครสมาชิก
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Signup
