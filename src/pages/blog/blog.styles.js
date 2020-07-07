import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  root: {
    boxSizing: 'border-box',
    //debug
    // border: '1px solid red'
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
    objectFit: 'cover'
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
    lineHeight: 1.5
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
})