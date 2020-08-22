import React, { useState, useEffect } from 'react'

import Button from '../button/button.component'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import { useStyles } from './social-links.styles.js'

const SocialLinks = () => {
  const classes = useStyles()
  const [data, setData] = useState(null)

  const facebookIcon = <FacebookIcon style={{ fontSize: '2.5em', padding: '1.5%' }} />
  const twitterHandle = 'https://www.linkedin.com/in/niels-p-18895221/'

  const handleClick = (URL) => {
    window.open(URL, '_blank')
  }

  const getData = async () => {
    const res = await fetch(`http://api.stressfreegut.com/social-links`)
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  if (data !== null) {
    console.log('data >>> ', data)
  }

  return (
    <div className={classes.root} >
      {data && (
        data.map((item, index) => {
          return (
            <Button
              imgLink={item.icon.url}
              action={() => handleClick(item.link)}
            />
          )
        })
      )}
    </div>
  )
}

export default SocialLinks