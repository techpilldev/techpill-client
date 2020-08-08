import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    boxShadow: '0 10px 10px 0px #black',
    //Debug
    // border: '1px solid red'
  },

  titleContainer: {
    margin: '1%',
    padding: '2%',

    //Debug
    // border: '1px solid red'
  },

  mobileImageContainer: {
    // margin: '1%',
    display: 'none',
    // justifyContent: 'center',

    //Debug
    // border: '1px solid red'
  },

  descriptionContainer: {
    margin: '1%',
    padding: '2%',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    color: '#858585',
    lineHeight: '1.7em',

    //Debug
    // border: '1px solid red'
  },

  desktopContainer: {
    display: 'none'
  },

  desktopImageContainer: {
    display: 'none',
  },

  desktopDetailsContainer: {
    display: 'none',
  },

  desktopDescription: {
    display: 'none'
  },

  '@media (min-width: 800px)': {

    root: {
      boxShadow: '0 10px 10px 0px grey',
      //Debug
      // border: '1px solid red'
    },

    titleContainer: {
      display: 'none'
    },

    mobileImageContainer: {
      display: 'none'
    },

    descriptionContainer: {
      display: 'none'
    },

    desktopContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    desktopDetailsContainer: {
      width: 'auto',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'flex-start',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1.7em',
      // textAlign: 'censter',
      lineHeight: '2em',
      color: '#858585',
      padding: '7%',

      //Debug
      // border: '1px solid red'
    },

    desktopDescription: {
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'flex-start',
      // width: 'auto', 
      fontSize: '0.7em',
      lineHeight: '2em',
      marginTop: '1%',
    },

    desktopImageContainer: {
      overflow: 'hidden',
      display: 'flex',
      width: 'auto',
      height: 'auto'
      //Debug
      // border: '1px solid red'
    }
  },
})