import { createTheme } from '@material-ui/core/styles'

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: 'hsl(0, 0%, 0%)',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
  },
})

export default darkTheme
