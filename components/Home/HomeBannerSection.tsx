import Image from 'next/image'
import { Button } from '@mui/material'
import Link from 'next/link'

const HomeBannerSection: React.FC = () => {
  return (
    <>
      {/* Mobile */}
      <div className='md:hidden bg-primary text-white relative aspect-[648/672]'>
        <Image
          src='/images/banner-header-mobile.webp'
          alt='banner'
          fill
          className='object-fill'
          priority
          sizes='100%'
        />
        <Link href='signup'>
          <Button
            aria-label='go to signup'
            variant='contained'
            color='primary'
            className='absolute left-[50%] bottom-[3%] w-[45vw] text-[3.5vw] !rounded-[40px] italic whitespace-nowrap'
            sx={{ px: 8, transform: 'translateX(-50%)' }}
          >
            สมัครสมาชิก
          </Button>
        </Link>
      </div>
      {/* Desktop */}
      <div className='hidden md:block bg-primary text-white relative aspect-[1920/902]'>
        <Image
          src='/images/banner-header.webp'
          alt='banner'
          fill
          className='object-fill'
          priority
          sizes='100%'
        />
        <Link href='signup'>
          <Button
            aria-label='go to signup'
            variant='contained'
            color='primary'
            className='absolute left-[16%] bottom-[12%] w-[20vw] text-[2.4vw] !rounded-[180px] italic whitespace-nowrap'
            sx={{ px: 8 }}
          >
            สมัครสมาชิก
          </Button>
        </Link>
      </div>
    </>
  )
}

export default HomeBannerSection
