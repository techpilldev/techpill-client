import React from 'react'

import Button from '../button/button.component'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useStyles } from './social-links.styles.js'

const SocialLinks = () => {
  const classes = useStyles()
  const twitterIcon = <TwitterIcon style={{ fontSize: '2.5em', padding: '1.5%' }} />
  const linkedIcon = <LinkedInIcon style={{ fontSize: '2.5em', padding: '1.5%' }} />

  const twitterHandle = 'https://www.linkedin.com/in/niels-p-18895221/'
  const linkedHandle = 'https://www.linkedin.com/in/niels-p-18895221/' 

  const handleClick = (URL) => {
    window.open(URL, '_blank')
  }

  return(
    <div className={classes.root} >
      <Button 
        image={twitterIcon} 
        action={() => handleClick(twitterHandle)} 
      />
      <Button 
        image={linkedIcon} 
        action={() => handleClick(linkedHandle)} 
      />
    </div>
  )
}

export default SocialLinks