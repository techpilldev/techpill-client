import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5%',
    height: 160,
    cursor: 'pointer',
    // border: '1px solid red'
  },

  author: {
    fontWeight: 'bolder',
  },

  container: {
    height: '100%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    background: 'white',
    webkitBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107,1)`,
    mozBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    boxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    color: '#495057'
    // border: '1px solid red'
  },

  imageCnt: {
    height: '100%',
    // border: '1px solid red'
  },

  image: {
    borderRadius: '10px 0px 0px 10px',
    width: 'auto',
    height: '100%',
    objectFit: 'contain',
  },

  name: {
    padding: '1%',
    // border: '1px solid red'
  },

  author: {

  },

  bio: {
    padding: '1%',
    fontWeight: 'lighter',
    lineHeight: 1,
    // border: '1px solid red'
  }
})