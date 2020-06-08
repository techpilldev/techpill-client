import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },

  headerTitle:{
    fontFamily: 'SPOTNIK_BOLD_2',
    fontSize: '2.5em',
    color: 'white',
     alignSelf: 'center',
  },

  buttonContainer: {
    margin: '1%',
    display: 'flex', 
    justifyContent: 'flex-end',
    color: '#1F2223',
  },

  navContainer: {
    display: 'none'
  },

  homeLink: { 
    display: 'flex',
    justifyContent:'center',
    textDecoration: 'none', 
  },

  '@media (min-width: 472px)': {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },

    homeLink: {
      textDecoration: 'none',
      width: 'auto',
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
      display: 'flex',
      justifyContent: 'center',
    },
  },

  '@media (min-width: 1240px)': {
    homeLink: {
      width: '25%'
    },
  },
})