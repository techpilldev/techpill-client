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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  navLink: {
    color: 'white',
    fontSize: '1.2em',
    fontFamily: 'Roboto'
  },

  link: {
    margin: '8.6%'
  },

  socials: {
    alignSelf: 'flex-end',
    margin: '1%'
  },

  '@media (min-width: 601px)': {
    root: {
      flexDirection: 'row'
    },

    nav: {
      width: '100%',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    link: {
      margin: '2%',
    },
  },
})