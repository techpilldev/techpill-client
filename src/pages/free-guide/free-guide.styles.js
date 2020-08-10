import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    // width: '100%',

    // border: '1px solid red'
  },

  bannerContainer: {
    background: 'linear-gradient(to right, #2DAAE0 0%, #179FDC 50% ,#117ADB 100%)',
    height: '30%'
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
})