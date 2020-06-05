import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',

    //Debug
    // border: '1px solid red'
  },

  buttonContainer: {
    margin: '1%',
    display: 'flex', 
    justifyContent: 'flex-end',
    color: '#1F2223',

    //Debug
    // border: '1px solid red'
  },

  navContainer: {
    display: 'none'
  },

  homeLink: { 
    textDecoration: 'none', 
    width: '65%',
  },

  '@media (min-width: 472px)': {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },

    homeLink: {
      textDecoration: 'none',
      width: '60%',
    },

    buttonContainer: {
      display: 'none'
    },

    navContainer: {
       backgroundColor: '#1F2223',
       display: 'flex',
       flexDirection: 'column',
       justifyContent:'center',
       alignItems: 'center',
       padding: '1%'
    },
  },

  '@media (min-width: 800px)': {
    homeLink: {
     width: '35%'
    },
  },

  '@media (min-width: 1240px)': {
    homeLink: {
      width: '22%'
    },
  },
})