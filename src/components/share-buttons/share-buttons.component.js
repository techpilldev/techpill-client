import React from 'react'

import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

import { useStyles } from './share-buttons.styles.js'

const ShareButtons = ({ pageUrl }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <TwitterShareButton className={classes.icon} url={pageUrl} >
        <TwitterIcon
          size={32}
          round={true}
        />
      </TwitterShareButton>

      <LinkedinShareButton className={classes.icon} url={pageUrl} >
        <LinkedinIcon
          size={32}
          round={true}
        />
      </LinkedinShareButton>

      <FacebookShareButton className={classes.icon} url={pageUrl} >
        <FacebookIcon
          size={32}
          round={true}
        />
      </FacebookShareButton>
      <RedditShareButton className={classes.icon} url={pageUrl} >
        <RedditIcon
          size={32}
          round={true}
        />
      </RedditShareButton>
      <WhatsappShareButton className={classes.icon} url={pageUrl} >
        <WhatsappIcon
          size={32}
          round={true}
        />
      </WhatsappShareButton>

      <EmailShareButton className={classes.icon} url={pageUrl} >
        <EmailIcon
          size={32}
          round={true}
        />
      </EmailShareButton>

    </div>
  )
}

export default ShareButtons