import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

interface LoadingProps {
  show: boolean
  isPortal?: boolean
}

const Loading: React.FC<LoadingProps> = ({ show }) => {
  if (!show) return null

  return (
    <div
      className='h-full w-full fixed bg-transparent flex justify-center items-center z-10 cursor-not-allowed left-0 top-0 overflow-auto flex-col'
      aria-hidden='true'
      tabIndex={-1}
    >
      <div className='bg-black bg-opacity-50 w-[130px] px-[10px] py-[20px] text-center text-white rounded-xl'>
        <CircularProgress color='secondary' />
        <Typography>กำลังโหลด...</Typography>
      </div>
    </div>
  )
}

export default Loading
