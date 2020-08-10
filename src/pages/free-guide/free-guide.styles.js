import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    // width: '100%',

    // border: '1px solid red'
  },

  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  bannerContainer: {
    background: 'linear-gradient(to right, #2DAAE0 0%, #179FDC 50% ,#117ADB 100%)',
    height: 'auto'
  },

  subscribeForm: {
    fontSize: 20,
    position: 'relative'
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