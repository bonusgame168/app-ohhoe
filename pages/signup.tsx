import { useState } from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { NextPage } from 'next'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'
import Link from 'next/link'

import * as authApiService from '@/services/authApi.service'
import Loading from '@/components/Common/Loading'
import ApiErrorDialog from '@/components/Common/ApiErrorDialog'
import { useRouter } from 'next/router'

interface SignupForm {
  phone: string
  password: string
  bank_transfer: string
  bank_number: string
  name: string
  lastname: string
  line_account?: string
  auto_bonus: boolean
}

const Signup: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupForm>({
    defaultValues: {
      phone: '',
      password: '',
      bank_transfer: 'scb',
      bank_number: '',
      name: '',
      lastname: '',
      line_account: '',
      auto_bonus: true,
    },
  })

  const router = useRouter()
  const { reference } = router.query

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleSubmitForm = async (values: SignupForm) => {
    setIsLoading(true)
    const body = { ...values, ref: reference as string | undefined }
    authApiService
      .signup(body)
      .then((response) => {
        setIsLoading(false)
        if (response.status) {
          authApiService.signin({
            username: response.data.username,
            password: response.data.raw_password,
          })
        } else {
          setErrorMessage(response.message)
          setOpenDialog(true)
        }
      })
      .catch((error) => {
        setIsLoading(false)
        setErrorMessage(error.message)
        setOpenDialog(true)
      })
  }

  return (
    <>
      <ApiErrorDialog
        open={openDialog}
        onClose={handleCloseDialog}
        message={errorMessage}
      />
      <Loading show={isLoading} />
      <div
        className={
          reference !== '11' && reference !== '12'
            ? 'page-wrapper content-wrapper bg-primary bg-[url("/images/background-signup.webp")] bg-no-repeat bg-cover flex items-center'
            : 'page-wrapper-ref content-wrapper bg-primary bg-[url("/images/background-signup.webp")] bg-no-repeat bg-cover flex items-center'
        }
      >
        <Container className='xl:p-0'>
          <Grid container justifyContent='center'>
            <Grid item xl={5} xs={12}>
              <Card
                sx={{ px: 2, py: 4 }}
                className='text-white bg-blur-2xl shadow-[0 0 15px 0 #210231] bg-[rgba(0,0,0,0.3)]'
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
                      name='phone'
                      control={control}
                      rules={{ required: 'โปรดระบุ เบอร์โทรศัพท์' }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          error={!!errors.phone}
                          helperText={errors.phone?.message}
                          className='AuthTextField'
                          label='เบอร์โทรศัพท์'
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
                          error={!!errors.password}
                          helperText={errors.password?.message}
                          className='AuthTextField'
                          label='รหัสผ่าน'
                          variant='filled'
                          type='password'
                          InputProps={{ disableUnderline: true }}
                          autoComplete='current-password'
                        />
                      )}
                    />
                    <Controller
                      name='bank_transfer'
                      control={control}
                      rules={{ required: 'โปรดระบุ ธนาคาร' }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          error={!!errors.bank_transfer}
                          helperText={errors.bank_transfer?.message}
                          className='AuthTextField'
                          label='ธนาคาร'
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                          select
                        >
                          <MenuItem value='scb'>ธนาคารไทยพาณิชย์</MenuItem>
                          <MenuItem value='ktb'>ธนาคารกรุงไทย</MenuItem>
                          <MenuItem value='bbl'>ธนาคารกรุงเทพ</MenuItem>
                          <MenuItem value='kbank'>ธนาคารกสิกรไทย</MenuItem>
                          <MenuItem value='tmb'>ธนาคารทหารไทย</MenuItem>
                          <MenuItem value='ttb'>ทีเอ็มบีธนชาต (ttb)</MenuItem>
                          <MenuItem value='bay'>ธนาคารกรุงศรีอยุธยา</MenuItem>
                          <MenuItem value='baac'>
                            ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร
                          </MenuItem>
                          <MenuItem value='cimbt'>ธนาคาร ซีไอเอ็มบี</MenuItem>
                          <MenuItem value='uobt'>ธนาคารยูโอบี</MenuItem>
                          <MenuItem value='gsb'>ธนาคารออมสิน</MenuItem>
                          <MenuItem value='tbank'>ธนาคารธนชาต</MenuItem>
                          <MenuItem value='ghb'>ธนาคารอาคารสงเคราะห์</MenuItem>
                          <MenuItem value='isbt'>
                            ธนาคารอิสลามแห่งประเทศไทย
                          </MenuItem>
                          <MenuItem value='kkp'>ธนาคารเกียรตินาคิน</MenuItem>
                          <MenuItem value='lhbank'>
                            ธนาคารแลนด์ แอนด์ เฮ้าส์
                          </MenuItem>
                          <MenuItem value='icbc'>ธนาคารไอซีบีซี (ไทย)</MenuItem>
                          <MenuItem value='tisco'>ธนาคารทิสโก้</MenuItem>
                          <MenuItem value='truew'>
                            บัญชี ทรูมันนี่ วอลเล็ท
                          </MenuItem>
                        </TextField>
                      )}
                    />
                    <Controller
                      name='bank_number'
                      control={control}
                      rules={{ required: 'โปรดระบุ เลขที่บัญชี' }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type='number'
                          error={!!errors.bank_number}
                          helperText={errors.bank_number?.message}
                          className='AuthTextField'
                          label='เลขที่บัญชี'
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                        />
                      )}
                    />
                    <Controller
                      name='name'
                      control={control}
                      rules={{ required: 'โปรดระบุ ชื่อ' }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          error={!!errors.name}
                          helperText={errors.name?.message}
                          className='AuthTextField'
                          label='ชื่อ (ใช้ชื่อที่ตรงกับชื่อบัญชีเท่านั้น)'
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                        />
                      )}
                    />
                    <Controller
                      name='lastname'
                      control={control}
                      rules={{ required: 'โปรดระบุ นามสกุล' }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          error={!!errors.lastname}
                          helperText={errors.lastname?.message}
                          className='AuthTextField'
                          label='นามสกุล'
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                        />
                      )}
                    />
                    <Controller
                      name='line_account'
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          className='AuthTextField'
                          label='ไลน์ไอดี'
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                        />
                      )}
                    />
                    <Controller
                      name='auto_bonus'
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          className='AuthTextCheckBox'
                          control={
                            <Checkbox {...field} checked={field.value} />
                          }
                          label='คลิกเลือกหากต้องการรับโบนัส'
                        />
                      )}
                    />
                    <Button
                      aria-label='signup'
                      variant='contained'
                      color='primary'
                      size='large'
                      className='submit-button block w-full'
                      type='submit'
                    >
                      สมัครสมาชิก
                    </Button>
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
                src='/images/ic-rabbit-speed.webp'
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
                <span className='ml-2 yellow-text-gradient pr-2'>
                  BONUSGAME168
                </span>
              </Typography>
              <Typography
                variant='h6'
                className='text-white text-center xl:text-right text-xl md:text-2xl mt-10 xl:mt-2'
              >
                หากคุณมีบัญชีแล้ว
                <Link href='signin' className='ml-2 yellow-text-gradient pr-2'>
                  เข้าสู่ระบบ
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
