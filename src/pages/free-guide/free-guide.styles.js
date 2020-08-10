import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    // width: '100%',

    // border: '1px solid red'
  },

  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '5%',
  },

  bannerContainer: {
    background: 'linear-gradient(to right, #2DAAE0 0%, #179FDC 50% ,#117ADB 100%)',
    height: 'auto'
  },

  subscribeForm: {
    marginTop: '3%',
    color: '#2DC4EE',
    width: '70%',
    height: 50,
    fontSize: 20,
    padding: '1%',
    fontFamily: 'Roboto',
    position: 'relative',
    border: '2px solid #2DC4EE',
  },

  formSubmitButton: {
    cursor: 'pointer'
  },

  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    // border: '1px solid red'
  },

  formSubmitButton: {
    background: 'none',
    color: '#2DC4EE',
    fontSize: '1.5em',
    width: 200,
    height: 50,
    border: '2px solid #2DC4EE',
    fontFamily: 'Roboto',
    margin: '3%',
    cursor: 'pointer',

    '&:hover': {
      color: 'white',
      background: '#2DC4EE',
    }
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
})