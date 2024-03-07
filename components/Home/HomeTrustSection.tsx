import Image from 'next/image'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import HomeSectionDivider from './HomeSectionDivider'

const HomeTrustSection: React.FC = () => {
  return (
    <>
      <HomeSectionDivider />
      <div className='bg-primary text-white relative  bg-[url("/images/background-promort.webp")] bg-no-repeat bg-cover'>
        <Container sx={{ padding: 5 }}>
          <Typography variant='h4' className='text-center text-[#683107] font-bold break-words'>
            OHHOE
          </Typography>
          <Typography variant='body2' className='text-center block'>
            ยินดีต้อนรับสู่ OHHOE สุดยอดเว็บสล็อตอันดับ 1 ในไทย
          </Typography>
          <Grid
            container
            sx={{
              mt: 8,
              gap: {
                xs: 5,
                sm: 0
              }
            }}
          >
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              alignItems='center'
              sx={{ flexWrap: 'nowrap', gap: 2, padding: 1 }}
            >
              <Image src='/images/ic-trust-02.webp' alt='deposit & withdraw' width={80} height={80} />
              <div className='flex flex-col md:text-center'>
                <Typography variant='h6' className='font-bold italic'>
                  ฝาก-ถอน ไม่มีขั้นต่ำ
                </Typography>
                <Typography variant='caption'>ฝากไม่มีขั้นต่ำ ถอนขั้นต่ำ 20 บาท</Typography>
              </div>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              alignItems='center'
              sx={{ flexWrap: 'nowrap', gap: 2, padding: 1 }}
            >
              <Image src='/images/ic-trust-01.webp' alt='deposit & withdraw' width={80} height={80} />
              <div className='flex flex-col md:text-center'>
                <Typography variant='h6' className='font-bold italic'>
                  ฝาก-ถอน ออโต้
                </Typography>
                <Typography variant='caption'>การันตีฝากถอนรวดเร็ว ภายใน 5 วินาที</Typography>
              </div>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              alignItems='center'
              sx={{ flexWrap: 'nowrap', gap: 2, padding: 1 }}
            >
              <Image src='/images/ic-trust-03.webp' alt='deposit & withdraw' width={80} height={80} />
              <div className='flex flex-col md:text-center'>
                <Typography variant='h6' className='font-bold italic'>
                  บริการ 24 ชม.
                </Typography>
                <Typography variant='caption'>มีแอดมินบริการตลอด 24 ชม. มั่นคง ปลอดภัย</Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default HomeTrustSection
