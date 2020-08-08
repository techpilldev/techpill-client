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
    // display: 'none'
  },

  cardContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  aboutCard: {
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
  aboutImage: {
    borderRadius: 10,
    width: 150,
    height: 150,
  },
  aboutTitle: {
    fontSize: '2em',
    color: '#495057',
    fontFamily: 'Roboto',
    margin: '2%',
  },
  aboutBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#495057',
    fontSize: '1.3em',
    fontFamily: 'Roboto',
    padding: '3%'
  },
  aboutBtn: {
    margin: '3%',
    width: 200,
    height: 'auto',
    border: '2px solid #2DC4EE',
    borderRadius: 30,
    alignSelf: 'center'
  },
  aboutText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    color: '#2DC4EE',
    width: 200,
    height: 50
  },
  '@media (min-width: 600px)': {
    bannerContainer: {
      height: 'auto',
    },
    aboutImage: {
      borderRadius: 10,
      width: 'auto',
      height: 'auto',
    },
    innerBanner: {
      display: 'inline'
    },
    aboutBtn: {
      margin: '3%',
      width: 400,
      height: 'auto',
      border: '2px solid #2DC4EE',
      borderRadius: 30,
      alignSelf: 'center'
    },
    aboutText: {
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
