import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '25%',
    margin: '1%',
    // border: '1px solid red'
  },

  icon: {
    margin: '1%'
  },

  '@media (min-width: 472px)': {
    root: {

    },
  },
})