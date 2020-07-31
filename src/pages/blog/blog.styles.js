import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    boxSizing: 'border-box',
    //debug
    // border: '1px solid red'
  },

  link: {
    color: '#2DC4EE',
    cursor: 'pointer',
    margin: '1% 5% 1% 0%',
    // border: '1px solid red',
  },

  detailLink: {
    color: '#2DC4EE',
    border: '1px solid #2DC4EE',
    padding: '2%',

    '&:hover': {
      color: 'white',
      backgroundColor: '#2DC4EE',
    }
  },

  linksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'center',
    margin: '2% 0% 4% 0%',

    // border: '1px solid red',
  },

  authorContainer: {
    display: 'none'
  },

  tagsHeading: {
    fontSize: '1.5em',
    fontWeight: 'bolder',
    // alignSelf: 'center',
    margin: '7% 0% 4% 0%',

    // border: '1px solid red'
  },

  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  headingContainer: {
    width: '85%',
    display: 'flex',
    flexDirection: 'row'
  },

  outerContainer: {
    width: '100%',
    height: 'auto',
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
    marginBottom: '5%',
  },

  blogImage: {
    width: '100vw',
    height: '30vh',
    objectFit: 'cover',
    zIndex: -1,
    borderRadius: 'none',
    bottom: 10
  },

  blogCard: {
    width: '90%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    background: 'white',
    webkitBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107,1)`,
    mozBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    boxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    color: '#495057',
    fontWeight: 'bolder',
    padding: '2%',
    position: 'relative',
    bottom: 5,

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
    color: '#e5e5e5',
    width: '80%',
    marginBottom: '7%'
  },

  blogBody: {
    fontSize: '1.1em',
    lineHeight: 1.5,

    // border: '1px solid red',
  },

  innderBody: {
    // display: 'flex',
    // flexDirection: 'column',
    // width: 'auto',
    // paddingLeft: '50%',

    // border: '1px solid red',
  },

  blogAuthor: {
    fontSize: '1.2em',
    marginBottom: '5%',

    // border: '1px solid red',

  },

  smallCard: {
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    borderRadius: '0px 0px 10px 10px',
    objectFit: 'contain',
    webkitBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107,1)`,
    mozBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    boxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
    fontWeight: 'bolder',
    fontFamily: 'Roboto',
    marginBottom: '3%',

    // border: '1px solid red'
  },

  smallImg: {
    borderRadius: '10px 10px 0px 0px',
    objectFit: 'cover',
    height: '200px',
    width: '100%',
  },

  smallHeading: {
    fontSize: '1.5em',
    padding: '2% 0% 2% 0%',
    color: '#495057',
    marginTop: '3%',
  },

  smallDate: {
    color: '#495057',
    fontStyle: 'italic',

    '& p': {
      padding: '2%',
    }
  },

  markdown: {
    color: '#495057',
    padding: '2% 0% 2% 0%',
  },

  referenceHeading: {
    fontSize: '1.5em',
    textAlign: 'center',
    fontWeight: 'bolder',
    marginBottom: '4%',
    margin: '2% 0% 0% 0%',

  },

  mardownContainer: {
    padding: '0%'
  },

  recOuterContainer: {
    display: 'flex',
    flexDirection: 'column',
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

  smallCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: 1.5,
    marginBottom: '5%'
  },


  sidebar: {
    display: 'none'
  },

  sidebarContainer1: {
    display: 'none'

  },

  sidebarContainer2: {
    display: 'none'
  },

  container2: {
    // border: '1px solid red'
  },

  '@media (min-width: 472)': {
    titleContainer: {

    },

    imageContainer: {

    },

    descriptionContainer: {

    },
  },

  //------------------------------------------- DESKTOP -------------------------------------------------

  '@media (min-width: 1240px)': {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      // border: '1px solid red',
    },

    outerContainer: {
      borderRadius: 15,
      width: '85%',
      height: 'auto',
      webkitBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107,1)`,
      mozBoxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
      boxShadow: `0px 5px 4px 0px rgba(107, 104, 107, 1)`,
      // border: '1px solid red',

    },

    featuredHeading: {
      display: 'inline',
      fontFamily: 'Roboto',
      fontSize: '2em',
      // border: '1px solid red',
    },

    blogHr: {
      color: '#e5e5e5',
      width: '85%',
      marginBottom: '0%',
      // border: '1px solid red',

    },

    tagsHeading: {
      alignSelf: 'flex-start',
      fontSize: '1.7em',
      fontWeight: 'bolder',
      margin: '0% 0% 0% 7%',

      // border: '1px solid red'
    },

    blogHeading: {
      fontSize: '2em',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: '2%',
      padding: '3% 0% 3% 0%',
      // border: '1px solid red',

    },

    blogCardContainer: {
      width: '100%',
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
      padding: '0%',
      bottom: 50,
      // border: '1px solid red',

    },

    blogImage: {
      width: '100%',
      height: '40vh',
      borderRadius: 15,

      // border: '1px solid red',
    },

    mardownContainer: {
      padding: '2% 7% 0% 7%',

    },

    referenceHeading: {
      fontSize: '1.7em',
      alignSelf: 'flex-start',
      fontWeight: 'bolder',
      margin: '3% 0% 0% 7%',

      // border: '1px solid red',
    },

    blogBody: {
      display: 'flex',
      flexDirection: 'row',
      padding: '0% 0% 0% 6%',
      margin: '3% 0% 3% 0%',
      width: '90%',

      // border: '1px solid red',
    },

    authorContainer: {
      width: '40%',
      display: 'flex',
      // backgroundColor: 'pink',
      // border: '1px solid red',
    },

    innderBody: {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      // paddingLeft: '50%',

      // border: '1px solid red',
    },

    blogAuthor: {
      padding: '3% 0% 0% 6%',
      // border: '1px solid red',

    },

    linksContainer: {
      justifyContent: 'flex-start',
      margin: '2% 0% 0% 7%',

      // border: '1px solid red',
    },

    recommendedContainer: {
      flexDirection: 'row',
      padding: '0%',


      // border: '1px solid red',
    },

    recOuterContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '7%',
      // border: '1px solid red',
    },

    recommendedHeading: {
      fontSize: '1.7em',
      alignSelf: 'flex-start',
      fontWeight: 'bolder',
      margin: '3% 0% 0% 7%',
    },

    recommendedImage: {
      // width: 'auto',
      // height: 130,
      // cursor: 'pointer',
      // paddingTop: '2%',
      // paddingBottom: '2%'
    },

    container2: {
      width: '85%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '5%',

      // border: '1px solid red',
    },

    sidebar: {
      width: '30%',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'space-between',
      // border: '1px solid red',
    },

    sidebarContainer1: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Roboto',
      lineHeight: 1.5,
      margin: '0% 0% 5% 10%',
      padding: '0% 5% 5% 5%',
      // border: '1px solid red',
    },

    sidebarTags: {
      color: 'blue',
    },

    sidebarContainer2: {
      // width: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'Roboto',
      margin: '0% 0% 5% 10%',
      padding: '5%',
      // border: '1px solid red',
    },

    smallCardContainer: {
      width: '70%',
    },

    smallCard: {
      width: '100%',
      height: '500px',
      marginBottom: '3%',

      // border: '1px solid red'
    },

    smallImg: {
      // width: '100%',
      height: '50%',
      // borderRadius: '10px 10px 0px 0px',
      // objectFit: 'cover',
      // height: '30%',
      // width: '100%',
    },

    smallHeading: {
      padding: '0% 0% 0% 0%',
      marginTop: '0%',
    },

    smallDate: {
      color: '#495057',
      fontStyle: 'italic',

      '& p': {
        padding: '2%',
      }
    },

    markdown: {
      color: '#495057',
      padding: '2% 0% 2% 0%',
    },
  },
})