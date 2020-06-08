import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },

  title: {
    fontFamily: 'SPOTNIK_BOLD_2',
    fontSize: '2.5em',
    padding: '1%',
    alignSelf: 'center'
  },

  subTitle: {
    fontFamily: 'SPOTNIK',
    fontSize: '1.2em',
    textAlign: 'center',
    color: '#858585',
    padding: '1%'
  },

  '@media (min-width: 472px)': {
    root:{
      flexDirection: 'column',
      marginTop: '0%',
    },

    title: {
      color: 'white',
      fontSize: '2em',
    },

    subTitle: {
      fontSize: '1.6em',
    },
  },

  '@media (min-width: 600px)': {
    title: {
      // color: 'white',
      fontSize: '3em',
    },

    subTitle: {
      fontSize: '1.3em',
    },
  },

  '@media (min-width: 140px)': {
    title: {
      textAlign: 'center'
    }
  }
})