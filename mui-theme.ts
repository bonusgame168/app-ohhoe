import { createTheme } from '@mui/material'
import { Shadows } from '@mui/material'
import { Prompt } from '@next/font/google'

const prompt = Prompt({ subsets: ['thai'], weight: ['200', '400', '700'], display: 'swap' })

export const muiTheme = createTheme({
  shape: {
    borderRadius: 8
  },
  shadows: Array(25).fill('none') as Shadows,
  typography: {
    fontSize: 16,
    fontFamily: prompt.style.fontFamily
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '8px'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px'
          }
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // borderRadius: '8px !important',
          '&.MuiButton-containedPrimary': {
            background:
              'linear-gradient(0deg, rgba(41,4,60,1) 0%, rgba(153,68,208,1) 100%) padding-box, linear-gradient(90deg, rgba(139,139,139,1) 0%, rgba(103,103,103,1) 45%, rgba(255,255,255,1) 100%) border-box',
            color: '#FFFFFF',
            border: '2px solid',
            borderImage:
              'linear-gradient(90deg, rgba(139,139,139,1) 0%, rgba(103,103,103,1) 45%, rgba(255,255,255,1) 100%) 1',
            boxShadow: '0px 0px 8px 1px #ab4ae2'
          },
          '&.MuiButton-containedWarning': {
            border: '2px solid',
            background:
              'linear-gradient(90deg, rgba(212,120,0,1) 0%, rgba(255,198,0,1) 100%) padding-box, linear-gradient(90deg, rgba(139,139,139,1) 0%, rgba(103,103,103,1) 45%, rgba(255,255,255,1) 100%) border-box',
            color: '#FFFFFF',
            borderImage:
              'linear-gradient(90deg, rgba(139,139,139,1) 0%, rgba(103,103,103,1) 45%, rgba(255,255,255,1) 100%) 1',
            boxShadow: '0px 0px 8px 1px #ab4ae2'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#170023'
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: '50% !important',
          '&.MuiPaginationItem-textPrimary.Mui-selected': {
            backgroundColor: '#ab4ae2'
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiLink-root': {
            color: '#ab4ae2',
            textDecoration: 'none'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-filledPrimary': {
            backgroundColor: '#ab4ae2',
            borderRadius: '16px !important'
          }
        }
      }
    }
  }
})
