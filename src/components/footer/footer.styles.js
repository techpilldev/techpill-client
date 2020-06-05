import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundColor: '#1F2223',
    padding: '1%',
    //Debug
    border: '1px solid red'
  },

  bottomNavContainer: {

    //Debug
    border: '1px solid red'
  },

  copywrite: {
    fontFamily: 'Roboto',
    padding: '10%',
    color: 'white',
    fontSize: '0.7em',
    textAlign: 'center',
    //Debug
    border: '1px solid red'
  },

  '@media (min-width: 472px)': {
    root: {

    },
  },
})