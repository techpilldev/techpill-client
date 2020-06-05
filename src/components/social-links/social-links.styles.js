import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    margin: '1%',
    color: '#2DC4EE'
  },

  '@media (min-width: 472px)': {
    root: {

    },
  },
})