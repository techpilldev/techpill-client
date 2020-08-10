import React from 'react'

import Button from '../button/button.component'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import { useStyles } from './social-links.styles.js'

const SocialLinks = () => {
  const classes = useStyles()
  // const twitterIcon = <TwitterIcon style={{ fontSize: '2.5em', padding: '1.5%' }} />
  // const linkedIcon = <LinkedInIcon style={{ fontSize: '2.5em', padding: '1.5%' }} />
  // const linkedHandle = 'https://www.linkedin.com/in/niels-p-18895221/'

  const facebookIcon = <FacebookIcon style={{ fontSize: '2.5em', padding: '1.5%' }} />
  const twitterHandle = 'https://www.linkedin.com/in/niels-p-18895221/'

  const handleClick = (URL) => {
    window.open(URL, '_blank')
  }

  return (
    <div className={classes.root} >
      <Button
        image={facebookIcon}
        action={() => handleClick(twitterHandle)}
      />
    </div>
  )
}

export default SocialLinks