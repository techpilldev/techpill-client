import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root:{
    boxSizing: 'border-box',
    //debug
    border: '1px solid red'
  },

  banner: {
    boxShadow: '0 10px 10px 0px lightgrey'
  },

  titleContainer: {
    margin: '1%',
    padding: '2%',
    color: '#1F2223',

    //Debug
    border: '1px solid red'
  },

  imageContainer: {
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

  '@media (min-width: 472)': {
    titleContainer: {

    },

    imageContainer: {

    },

    descriptionContainer: {

    },
  },
})