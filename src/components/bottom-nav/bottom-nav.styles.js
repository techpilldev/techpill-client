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

  link: {
    // padding: '5%',
    margin: '8.6%'
  },

  navLink: {
    color: 'white',
    fontSize: '1.2em',
    fontFamily: 'Roboto'
  },

  '@media (min-width: 472px)': {
    root: {
      // flexDirection: 'row'
    },
    link: {
      // padding: '1%',
    },
    navLink: {
      // color: 'white',
      // fontSize: '1em',
      // fontFamily: 'Roboto, sans-serif'
    },
    homeLink: {
      // display: 'none',
    },
  },
})