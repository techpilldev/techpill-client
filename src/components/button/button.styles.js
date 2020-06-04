import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({

  released: {
    animationName: '$released',
    animationFillMode: 'forwards',
    animationDuration: '0.1s',
    cursor: 'pointer',
  },

  pressed: {
    animationName: '$pressed',
    animationFillMode: 'forwards',
    animationDuration: '0.1s',
    cursor: 'pointer',
  },

  '@keyframes released': {
    '0%': {
      opacity: 0.5
    },

    '100%': {
      opacity: 1
    },
  },

  '@keyframes pressed': {
    '0%': {
      opacity: 1
    },

    '100%': {
      opacity: 0.5
    }
  },

})