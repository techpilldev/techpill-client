import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    width: 'auto',
    //Debug
    border: '1px solid red'
  },

  nav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  drawer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  lis: {
    padding: '5% 3% 5%',
  },

  navLink: {
    color: 'black',
    fontSize: '1.5em',
    fontFamily: 'Roboto'
  },

  '@media (min-width: 600px)': {
    lis: {
      padding: '1%',
    },
    navLink: {
      color: 'white',
      fontSize: '1em',
      fontFamily: 'Roboto, sans-serif'
    },
  },
})