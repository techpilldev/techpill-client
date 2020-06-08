import React from 'react'
import Title from '../../components/title/title.component.js'
import Banner from '../../components//banner/banner.component.js'

import { useStyles } from './contact.styles.js'

const Contact = () => {
  const classes = useStyles()
  const titles = ["contact", "let's chat"]
  const bannerTitle = (
    <Title
      color='white'
      title={titles[0]}
      subTitle={titles[1]}
    />)

  const description = `Please fill out the form below. We will get back to you as soon as we can!`

  return (
    <div className={classes.root} >
      <div className={classes.bannerContainer}>
        <div className={classes.innerBanner} >
          <Banner
            title={bannerTitle}
            description={description}
            desColor='white'
          />
        </div>
      </div>
      <div>
        Contact Page
      </div>
    </div>
  )
}

export default Contact