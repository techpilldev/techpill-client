import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    boxSizing: 'border-box',
    //debug
    // border: '1px solid red'
  },

  bannerContainer: {
    background: 'linear-gradient(to right, #2DAAE0 0%, #179FDC 50% ,#117ADB 100%)',
    height: '30%'
  },

  innerBanner: {
    display: 'none'
  },

  cardContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  legalCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    margin: '1%',
    // textAlign: 'center',
    borderRadius: 10,
    webkitBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107,1)`,
    mozBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    boxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    // border: '1px solid red'
  },
  legalTitle: {
    fontSize: '2em',
    color: '#495057',
    fontFamily: 'Roboto',
    margin: '2%',
  },
  legalBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#495057',
    fontSize: '1.3em',
    fontFamily: 'Roboto',
    padding: '3%'
  },
  '@media (min-width: 600px)': {
    bannerContainer: {
      height: 'auto',
    },
    innerBanner: {
      display: 'inline'
    },
    legalText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
      color: '#2DC4EE',
      width: 400,
      height: 50
    },
  },
})