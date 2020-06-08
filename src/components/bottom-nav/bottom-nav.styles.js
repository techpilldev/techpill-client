import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',

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
    fontSize: '1em',
    fontFamily: 'Roboto'
  },

  link: {
    marginLeft: '11%',
    marginRight: '11%',

    margin: '6% 11% 6% 11%'
  },

  socials: {
    alignSelf: 'flex-end',
    margin: '1%'
  },

  '@media (min-width: 457px)':{
   link:{
    margin: '8%'
   }
  },

  '@media (min-width: 550px)': {
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
      margin: '0%',
      marginLeft: '1.9%',
      marginRight: '1.9%',
    },
  },
})