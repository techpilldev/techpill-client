import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    //Debug
    // border: '1px solid red'
  },

  navLink: {
    color: 'black',
    fontSize: '1.5em',
    fontFamily: 'Roboto'
  },

  '@media (min-width: 472px)': {
    root: {

    },

    navLink: {
      color: 'white',
      fontSize: '1em',
      fontFamily: 'Roboto, sans-serif'
    },

  },
})