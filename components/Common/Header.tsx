import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar className='h-[93px] gap-5'>
        <Link className='flex-1' href='/'>
          <Image
            src='/images/header-logo.webp'
            alt='header-logo'
            width={150}
            height={70}
            priority
            unoptimized
          />
        </Link>
        <Link href='/' className='no-underline hidden lg:inline-block'>
          <Button className='text-white' aria-label='go to home page'>
            หน้าหลัก
          </Button>
        </Link>
        <Link
          href='/#home-promotion'
          className='no-underline hidden lg:inline-block'
        >
          <Button className='text-white' aria-label='go to promotion'>
            โปรโมชั่น
          </Button>
        </Link>
        <Link href='/article' className='no-underline hidden lg:inline-block'>
          <Button className='text-white' aria-label='go to article'>
            บทความ
          </Button>
        </Link>
        <Link href='signin' className='no-underline'>
          <Button variant='contained' color='warning' aria-label='go to signup'>
            เข้าสู่ระบบ
          </Button>
        </Link>
        <Link href='signup' className='no-underline hidden lg:inline-block'>
          <Button variant='contained' color='primary' aria-label='go to signin'>
            สมัครสมาชิก
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
