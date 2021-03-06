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

  cardContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  aboutCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
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

  bookHeading: {
    fontSize: '1.5em',
    color: '#495057',
    fontFamily: 'Roboto',
    cursor: 'pointer',
  },

  bookLink: {
    fontSize: '1.3em',
    color: '#2DC4EE',
    fontFamily: 'Roboto',
    cursor: 'pointer',

  }
})