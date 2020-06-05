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

  navLinkActive: {
    padding: 7,
    color: '#2DC4EE',
    fontSize: '1.5em',
    fontFamily: 'Roboto',
    border: '2px solid #2DC4EE',
    borderRadius: 25,
    animationName: '$fade-in',
    animationFillMode: 'forwards',
    animationDuration: '0.5s',
    transitionTimingFunction: 'ease-out'
  },

  '@media (min-width: 472px)': {
    root: {

    },

    navLink: {
      color: 'white',
      fontSize: '1.2em',
      fontFamily: 'Roboto, sans-serif'
    },

    navLinkActive: {
      padding: 5,
      color: '#2DC4EE',
      fontSize: '1.2em',
      fontFamily: 'Roboto',
      border: '2px solid #2DC4EE',
      borderRadius: 20,
      animationName: '$fade-in',
      animationFillMode: 'forwards',
      animationDuration: '0.5s',
      transitionTimingFunction: 'ease-out'
    },
  },

  '@keyframes fade-in': {
    '0%': {
      opacity: 0
    },

    '100%': {
      opacity: 1
    }
  },
})