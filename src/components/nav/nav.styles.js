import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    display: 'flex', 
    width: '100%',
    flexDirection: 'column'
    //Debug
    // border: '1px solid red'
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

  link: {
    padding: '5%',
    marginLeft: '5%'
  },

  homeLink: {
    padding: '5%',
    marginLeft: '5%'
  },

  socials: {
    alignSelf: 'flex-end',
    margin: '0.5%'
  },

  navLink: {
    color: 'black',
    fontSize: '1em',
    fontFamily: 'Roboto'
  },

  '@media (min-width: 472px)': {
    root:{
      flexDirection: 'row'
    },
    link: {
      padding: '1%',
    },
    navLink: {
      color: 'white',
      fontSize: '1em',
      fontFamily: 'Roboto, sans-serif'
    },
    homeLink: {
      display: 'none',
    },
  },
})