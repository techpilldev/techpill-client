import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    boxShadow: '0 10px 10px 0px grey',
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
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',

    //Debug
    // border: '1px solid red'
  },

  descriptionContainer: {
    margin: '1%',
    padding: '6%',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    color: '#858585',
    lineHeight: '1.7em',

    //Debug
    // border: '1px solid red'
  },

  desktopContainer:{
    display: 'none'
  },

  desktopImageContainer: {
    display: 'none',
  },

  desktopDetailsContainer: {
    display: 'none',
  },

  desktopDescription:{
    display: 'none'
  },

  '@media (min-width: 800px)': {
    titleContainer:{
      display: 'none'
    },

    mobileImageContainer:{
      display: 'none'
    },

    descriptionContainer:{
      display: 'none'
    },

    desktopContainer:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      //Debug
      // border: '1px solid red'
    },

    desktopDetailsContainer: {
      width: '60%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1.7em',
      textAlign: 'center',
      lineHeight: '2em',
      color: '#858585',
      padding: '5%',

      //Debug
      // border: '1px solid red'
    },

    desktopDescription: { 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%', 
      fontSize: '0.7em', 
      lineHeight: '2em' ,
      marginTop: '1%'
    },

    desktopImageContainer: {
      display: 'flex',

      //Debug
      // border: '1px solid red'
    }
  },
})