import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Image from 'next/image'
import HomeSectionDivider from './HomeSectionDivider'

const HomePromotionSection: React.FC = () => {
  return (
    <>
      <HomeSectionDivider />
      <div id='home-promotion' className='bg-primary text-white'>
        <Container sx={{ padding: 5 }}>
          <Typography variant='h4' className='text-center font-bold'>
            โปรโมชั่น
          </Typography>
          <Typography variant='body2' className='text-center block'>
            เดิมพันออนไลน์ ลงทุนน้อย กำไรเยอะ
          </Typography>
          <Grid container>
            {new Array(6).fill('').map((_: unknown, index: number) => (
              <Grid container item xs={6} md={4} key={index} justifyContent='center'>
                <Image
                  src={`/images/promotion-${index}.webp`}
                  alt={`promotion number ${index + 1}`}
                  width={609}
                  height={684}
                  className='object-contain max-w-full h-auto'
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default HomePromotionSection
