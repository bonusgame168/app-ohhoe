import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Typography from '@mui/material/Typography'
import RedeemIcon from '@mui/icons-material/Redeem'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Image from 'next/image'
import Paper from '@mui/material/Paper'
import Link from 'next/link'

const FooterNavigation: React.FC = () => {
  return (
    <Paper
      className='fixed bottom-0 left-0 right-0 md:hidden z-50'
      elevation={3}
    >
      <BottomNavigation showLabels className='bg-primary h-[80px]'>
        <BottomNavigationAction
          showLabel
          className='text-white'
          label={
            <Link className='no-underline' href='signup'>
              <Typography className='text-white text-[0.65rem]'>
                สมัครสมาชิก
              </Typography>
            </Link>
          }
          icon={<PersonAddIcon />}
        />
        <BottomNavigationAction
          showLabel
          className='text-[#ffb402]'
          label={
            <Link className='no-underline' href='signin'>
              <Typography className='text-[#ffb402] text-[0.65rem]'>
                เข้าสู่ระบบ
              </Typography>
            </Link>
          }
          icon={<ExitToAppIcon />}
        />
        <BottomNavigationAction
          disableRipple
          className='min-w-0'
          icon={
            <Image
              src='/images/logo-bottom-navigation.webp'
              width={60}
              height={60}
              alt='logo'
            />
          }
        />
        <BottomNavigationAction
          showLabel
          className='text-white'
          label={
            <Link className='no-underline' href='/#home-promotion'>
              <Typography className='text-white text-[0.65rem]'>
                โปรโมชั่น
              </Typography>
            </Link>
          }
          icon={<RedeemIcon />}
        />
        <BottomNavigationAction
          className='text-white'
          label={
            <a
              href='https://line.me/R/ti/p/@ohhoe'
              target='_blank'
              rel='noreferrer'
            >
              <Typography className='text-white text-[0.65rem]'>
                ติดต่อ
              </Typography>
            </a>
          }
          icon={<PermContactCalendarIcon />}
        />
      </BottomNavigation>
    </Paper>
  )
}

export default FooterNavigation
