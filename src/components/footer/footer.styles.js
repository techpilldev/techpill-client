import { createUseStyles } from 'react-jss'
import zIndex from '@material-ui/core/styles/zIndex'

export const useStyles = createUseStyles({
  root: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundColor: '#1F2223',
    padding: '1%',
    //Debug
    // border: '1px solid red'
  },

  titleContainer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    marginTop: '5%',
  },

  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  bottomNavContainer: {
    marginLeft: '0%',
    //Debug
    // border: '1px solid red'
  },

  copywrite: {
    fontFamily: 'Roboto',
    padding: '8%',
    color: 'white',
    fontSize: '0.8em',
    textAlign: 'center',
    //Debug
    // border: '1px solid red'
  },

  '@media (min-width: 600px)': {
    innerContainer: {
      display: 'flex',
      flexDirection: 'column-reverse'
    },

    titleContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'auto',
      marginTop: '1%',
    },

    bottomNavContainer: {
      marginLeft: '5%',
      //Debug
      // border: '1px solid red'
    },

    copywrite: {
      padding: '1%',
      marginRight: '1%',
    }
  },
})