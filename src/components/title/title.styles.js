import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'SPOTNIK_BOLD_2',
    fontSize: '2.5em',
    padding: '1%'
  },

  subTitle: {
    fontFamily: 'SPOTNIK',
    fontSize: '1.2em',
    textAlign: 'center',
    padding: '1%'
  },

  '@media (min-width: 600px)': {
    root:{
      flexDirection: 'row',
    },

    title: {
      color: 'white',
      fontSize: '2em',
    },

    subTitle: {
      fontSize: '1.6em',
    },

  },

  '@media (min-width: 140px)': {
    title: {
      textAlign: 'center'
    }
  }
})