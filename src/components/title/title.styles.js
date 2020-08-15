import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10% 0% 0% 0%',
  },

  title: {
    fontFamily: 'SPOTNIK_BOLD_2',
    fontSize: '2.5em',
    margin: 0
  },

  subTitle: {
    fontFamily: 'SPOTNIK',
    fontSize: '1.2em',
    textAlign: 'center',
    color: '#858585',
    margin: 0
  },
  '@media (min-width: 140px)': {
    title: {
      textAlign: 'center'
    }
  },

  '@media (min-width: 472px)': {
    root: {
      flexDirection: 'column',
      marginTop: '0%',
    },

    title: {
      color: 'white',
      fontSize: '2em',
      lineHeight: '1em',
      marginTop: '1%'
    },

    subTitle: {
      fontSize: '1.6em',
    },
  },

  '@media (min-width: 600px)': {
    title: {
      fontSize: '2.5em',
      width: '80%'
    },

    subTitle: {
      fontSize: '1.3em',
    },
  },


  '@media (min-width: 800px)': {
    root: {
      alignItems: 'flex-start',
    },

    title: {
      display: 'flex',
      // alignItems: 'center',
      width: '100%',
      textAlign: 'start',
    },

    subTitle: {
      fontSize: '1.3em',
    },
  },

})