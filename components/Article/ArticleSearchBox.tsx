import Box from '@mui/material/Box'
import { Controller, useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'

interface ArticleSearchBoxForm {
  term: string
}

interface ArticleSearchBoxProps {
  onSearch: (value: string) => void
}

const ArticleSearchBox: React.FC<ArticleSearchBoxProps> = ({ onSearch }) => {
  const { handleSubmit, control } = useForm<ArticleSearchBoxForm>({
    defaultValues: {
      term: ''
    }
  })

  const handleSubmitForm = (data: ArticleSearchBoxForm) => {
    onSearch(data.term)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Box className='border-solid flex rounded border-[#bbb] border-[1px]' sx={{ my: 2 }}>
        <Controller
          name='term'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              className='AuthTextField w-full'
              label='ค้นหาบทความ'
              variant='filled'
              InputProps={{ disableUnderline: true }}
            />
          )}
        />
        <Button
          aria-label='search button'
          type='submit'
          variant='contained'
          color='primary'
          className='!rounded-l-none !rounded-r-[3px] border-0 shadow-none'
        >
          <SearchIcon />
        </Button>
      </Box>
    </form>
  )
}

export default ArticleSearchBox
