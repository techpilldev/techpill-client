import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    boxShadow: '0 0 10px 0 grey',

    //Debug
    border: '1px solid red'
  },

  buttonContainer: {
    margin: '1%',
    display: 'flex', 
    justifyContent: 'flex-end',
    color: '#1F2223',

    //Debug
    border: '1px solid red'
  },

  titleContainer: {
    margin: '1%',
    padding: '2%',
    color: '#1F2223',
    //Debug
    border: '1px solid red'
  },

  navContainer: {
    display: 'none'
  },

  imageContainer:{
    margin: '1%',
    backgroundColor: 'blue',

    //Debug
    border: '1px solid red'
  },

  descriptionContainer: {
    margin: '1%',
    padding: '6%',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    color: '#858585',
    lineHeight: '1.7em',

    //Debug
    border: '1px solid red'
  },

  '@media (min-width: 600px)': {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },

    navContainer: {
      //  height: 'auto',
       backgroundColor: '#1F2223',
       display: 'flex',
       flexDirection: 'column',
       justifyContent:'center',
       alignItems: 'center',
       padding: '2%'
    },

    titleContainer: {
      padding: '3%',
    },

    buttonContainer: {
      display: 'none'
    },

    imageContainer: {
      width: '30%',
      alignSelf: 'flex-end'
    },

    descriptionContainer: {
      width:'60%',
      padding: '3%',
    },
  },
})