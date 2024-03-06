import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface ApiErrorDialogProps {
  open: boolean
  onClose: () => void
  message?: string
}

const ApiErrorDialog: React.FC<ApiErrorDialogProps> = ({ open, onClose, message }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <div className='min-w-[350px]'>
        <DialogTitle id='alert-dialog-title'>เกิดข้อผิดพลาด</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} autoFocus aria-label='close dialog button'>
            ปิด
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  )
}

export default ApiErrorDialog
