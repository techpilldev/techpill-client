import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  searchbar: {

    //Debug
    // border: '1px solid red'
  },

  searchbar_input: {
    width: '80%',
    height: '5%',
    borderRadius: 25,
    padding: '0% 3% 0% 3%',

    border: '2px solid #2DC4EE',

    '&:focus': {
      outline: 'none',
    }
  },

  '@media (min-width: 472px)': {
    root: {

    },
  },

  '@media (min-width: 800px)': {
    searchbar_input: {
      width: '110%',
      height: 50,
      borderRadius: 25,
      padding: '0% 3% 0% 3%',

      border: '2px solid #2DC4EE',

      '&:focus': {
        outline: 'none',
      }
    },
  },
})