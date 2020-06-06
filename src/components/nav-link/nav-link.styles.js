import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    //Debug
    // border: '1px solid red'
  },

  navLink: {
    padding: 5,
    border: '2px solid transparent',
    color: 'black',
    fontSize: '1.5em',
    fontFamily: 'Roboto',
  },

  navLinkActive: {
    padding: 5,
    color: '#2DC4EE',
    fontSize: '1.5em',
    fontFamily: 'Roboto',
    border: '2px solid #2DC4EE',
    borderRadius: 25,
    animationName: '$reveal',
    animationFillMode: 'forwards',
    animationDuration: '0.5s',
    transitionTimingFunction: 'ease-out',
  },

  '@media (min-width: 472px)': {
    navLink: {
      color: 'white',
      fontSize: '1.2em',
    },

    navLinkActive: {
      color: '#2DC4EE',
      fontSize: '1.2em',
    },
  },

  '@keyframes reveal': {
    '0%': {
      opacity: 0
    },

    '100%': {
      opacity: 1
    }
  },
})