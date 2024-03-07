import dynamic from 'next/dynamic'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

const Slider = dynamic(() => import('@/components/Common/Slider'), { ssr: false })

const Footer: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 8
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  }

  return (
    <Box className='bg-primary text-white pb-[56px] md:pb-0 bg-[url("/images/background-footer.webp")] bg-no-repeat bg-cover'>
      <Box sx={{ pt: 2 }}>
        <Slider {...settings}>
          {new Array(13).fill('').map((_: string, index) => (
            <div key={index} className='!inline-flex justify-center'>
              <Image
                src={`/images/ic-bet-band-${index}.webp`}
                alt='game image'
                width={79}
                height={40}
                className='object-contain'
              />
            </div>
          ))}
        </Slider>
      </Box>
      <Container sx={{ p: 2 }}>
        <Box className='flex justify-center' sx={{ mt: 4 }}>
          <Image
            className='shadow-[0_0_8px_0_#fff] bg-white rounded-[50px]'
            src='/images/truemoneywallet-logo.webp'
            alt='icon kbank'
            width={200}
            height={58}
          />
        </Box>
        <Box className='flex justify-center flex-wrap' sx={{ mt: 4, gap: 1.5 }}>
          {new Array(8).fill('').map((_: string, index) => (
            <Box key={index} className='relative w-[32px] h-[32px] md:w-[40px] md:h-[40px]'>
              <Image
                className='shadow-[0_0_8px_0_#fff] rounded-full '
                src={`/images/bank-${index}.webp`}
                alt='bank icon'
                fill
              />
            </Box>
          ))}
        </Box>
        <Typography fontSize='small' className='text-center' sx={{ mt: 4 }}>
          2022-{new Date().getFullYear()} © Copyright OHHOE All rights Reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
