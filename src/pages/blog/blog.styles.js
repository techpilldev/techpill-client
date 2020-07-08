import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    boxSizing: 'border-box',

    //debug
    // border: '1px solid red'
  },

  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  outerContainer: {
    width: '100%',
    height: 'auto',

    // alignSelf: 'center'
    // display: 'none'
    // border: '1px solid red',

  },

  featuredHeading: {
    padding: '2% 0% 2% 0%',
    color: '#495057',
    marginTop: '5%',
    display: 'none',
  },

  blogCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    marginBottom: '25%',
  },

  blogImage: {
    width: '100vw',
    height: '30vh',
    // objectFit: 'cover',
    // overflow: 'hidden',
    zIndex: -1,
    borderRadius: 'none',
    // borderRadius: '10px 10px 0px 0px',
    // position: 'relative',
    bottom: 10
  },

  blogCard: {
    width: '90%',
    height: 'auto',
    borderRadius: 10,
    background: 'white',
    webkitBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107,1)`,
    mozBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    boxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    color: '#495057',
    fontWeight: 'bolder',
    padding: '2%',
    position: 'relative',
    bottom: 50,

    // border: '1px solid red',
  },

  blogDate: {
    fontStyle: 'italic',
    padding: '2% 0% 0% 2%'
  },

  blogHeading: {
    fontSize: '2em',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '2%',
    padding: '7% 0% 7% 0%',
  },

  blogHr: {
    color: '#dcdcdd',
    width: '80%',
    marginBottom: '7%'
  },

  blogBody: {
    fontSize: '1.1em',
    lineHeight: 1.5,
    // padding: '1%',
  },

  blogAuthor: {
    fontSize: '1.2em',
    marginBottom: '5%'
  },

  referenceHeading: {
    fontSize: '1.5em',
    textAlign: 'center',
    fontWeight: 'bolder'
  },

  mardownContainer: {
    padding: '0%'
  },

  recommendedHeading: {
    fontSize: '1.5em',
    textAlign: 'center',
    fontWeight: 'bolder',
    marginTop: '5%',
  },

  recommendedContainer: {
    width: '90%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '3%',

    // border: '1px solid red',
  },

  recommendedTitle: {
    fontWeight: 'bolder',
    paddingBottom: '2%'
  },

  recommendedImage: {
    width: 'auto',
    height: 130,
    cursor: 'pointer',
    paddingTop: '2%',
    paddingBottom: '2%'
  },

  recommendedImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    marginLeft: '3%',
    cursor: 'pointer'
  },

  '@media (min-width: 472)': {
    titleContainer: {

    },

    imageContainer: {

    },

    descriptionContainer: {

    },
  },

  '@media (min-width: 1240px)': {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

      // border: '1px solid red',
    },

    outerContainer: {
      borderRadius: 15,
      width: '70%',
      height: 'auto',
      webkitBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107,1)`,
      mozBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
      boxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
      // marginLeft: '12%',
      // border: '1px solid red',

    },

    featuredHeading: {
      display: 'inline',
      fontFamily: 'Roboto',
      fontSize: '2em',

    },

    blogCardContainer: {
      width: '100%',

      // borderRadius: 10,

      // border: '1px solid red'
    },

    blogCardContainer: {
      alignSelf: 'center',
      marginBottom: '0%',

      // border: '1px solid red',

    },

    blogCard: {
      width: '100%',
      borderRadius: 15,

      height: 'auto',
      borderRadius: 0,
      background: 'white',
      webkitBoxShadow: `none`,
      mozBoxShadow: `none`,
      boxShadow: `none`,
      // color: '#495057',
      // fontWeight: 'bolder',
      padding: '0%',
      // position: 'relative',padding:
      bottom: 50,
    },

    blogImage: {
      width: '100%',
      height: '40vh',
      borderRadius: 15,

    },

    mardownContainer: {
      padding: '1%'
    },

    blogBody: {
      padding: '1%'
    },

    blogAuthor: {
      padding: '1%'
    },
  },
})