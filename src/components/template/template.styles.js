import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    //Debug
    border: '1px solid red'
  },

  '@media (min-width: 472px)': {
    root: {

    },
  },
})