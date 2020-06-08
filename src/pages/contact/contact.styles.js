import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    boxSizing: 'border-box',

    //debug
    // border: '1px solid red'
  },

  bannerContainer: {
    background: 'linear-gradient(to right, #2DAAE0 0%, #179FDC 50% ,#117ADB 100%)',
    height: 'auto'
  },

  innerBanner: {
    display: 'none'
  },

  '@media (min-width: 600px)': {
    bannerContainer: {
    },

    innerBanner: {
      display: 'inline'
    },
  },
})