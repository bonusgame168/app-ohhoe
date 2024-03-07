import dynamic from 'next/dynamic'
import Image from 'next/image'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import HomeSectionDivider from './HomeSectionDivider'
const Slider = dynamic(() => import('@/components/Common/Slider'), { ssr: false })

const HomeGameSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <>
      <HomeSectionDivider />
      <div className='bg-primary text-white relative  bg-[url("/images/background-game.webp")] bg-no-repeat bg-cover'>
        <Container sx={{ padding: 5 }}>
          <Typography variant='h4' className='text-center  text-[#683107] font-bold'>
            เกมส์มันส์มันส์
          </Typography>
          <Typography variant='body2' className='text-center block'>
            เกมเยอะ ภาพสวยทั้งใหม่ และ เป็นที่นิยม
          </Typography>
          <Box sx={{ mt: 8 }}>
            <Slider {...settings}>
              {new Array(4).fill('').map((_: string, index) => (
                <div key={index} className='!inline-flex justify-center'>
                  <Image
                    src={`/images/game-${index}.webp`}
                    alt='game image'
                    width={350}
                    height={350}
                    className='object-contain'
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default HomeGameSection
