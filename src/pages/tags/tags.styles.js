import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  container2: {
    display: 'column',

    // border: '1px solid red',
  },

  sidebar: {
    display: 'none',
    // border: '1px solid red',
  },

  heading: {
    fontFamily: 'Roboto',
    fontSize: '2.5em',
    marginBottom: '3%',
    color: '#495057',

  },

  sidebarContainer1: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Roboto',
    lineHeight: 1.5,
    margin: '0% 0% 5% 20%',
    padding: '0% 5% 5% 5%',

    // border: '1px solid red',
  },

  // smallCardContainer: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   lineHeight: 1.5,
  //   marginBottom: '5%'
  // },

  sidebarTags: {
    color: 'blue',
  },

  sidebarContainer2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    margin: '0% 0% 5% 20%',
    padding: '5%',
    // border: '1px solid red',
  },

  smallCard: {
    width: '100%',
    webkitBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107,1)`,
    mozBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    boxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    borderRadius: '10px 10px 10px 10px',
    fontFamily: 'Roboto',
    marginBottom: '3%',
    // border: '1px solid red'
  },

  smallImg: {
    width: '100%',
    height: 200,
    borderRadius: '10px 10px 0px 0px',
    objectFit: 'cover',
    // height: '30%',
    // width: '100%',
  },

  smallHeading: {
    fontSize: '1.5em',
    padding: '0% 0% 0% 0%',
    margin: '2% 0% 2% 0%',
  },

  smallDate: {
    color: '#495057',
    fontStyle: 'italic',
    margin: '0% 0% 2% 0%',

    '& p': {
      padding: '2%',
    }
  },
  '@media (min-width: 1240px)': {
    container2: {
      width: '90%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      // margin:s '5% 0% 5% 0%',

      // border: '1px solid red',
    },
    sidebar: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'space-between',
      // border: '1px solid red',
    },
  }
})