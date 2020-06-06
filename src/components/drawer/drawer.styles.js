import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  rootOpen: {
    backgroundColor: 'white',
    width: '80vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    boxShadow: '0 0 5px 5px lightgrey',
    position: 'absolute',
    alignSelf: 'flex-end',
    zIndex: 9,
    animationName: '$action',
    animationFillMode: 'forwards',
    animationDuration: '0.3s',
    borderRadius: '0.5%'

    //Debug
    // border: '1px solid red'
  },

  rootClose: {
    backgroundColor: 'white',
    width: '80vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    boxShadow: '0 0 5px 5px lightgrey',
    position: 'absolute',
    alignSelf: 'flex-end',
    zIndex: 9,
    animationName: '$backwards',
    animationFillMode: 'forwards',
    animationDuration: '0.4s',
    borderRadius: '0.5%'

    //Debug
    // border: '1px solid red'
  },

  buttonContainer: {
    margin: '1%',
    display: 'flex',
    justifyContent: 'flex-end',

    //Debug
    // border: '1px solid red'
  },

  navContainer: {
    margin: '1%',

    //Debug
    // border: '1px solid red'
  },

  '@keyframes action': {
    '0%': {
      right: '-80vw',
    },

    '100%': {
      right: '0vw'
    },
  },

  '@keyframes backwards': {
    '0%': {
      right: '0vw'
    },

    '100%': {
      right: '-80vw',
    },
  },
})