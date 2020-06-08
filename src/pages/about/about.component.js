import React from 'react'
import Title from '../../components/title/title.component.js'
import Banner from '../../components//banner/banner.component.js'

import { useStyles } from './about.styles.js'

const About = () => {
  const classes = useStyles()
  const titles = ["Niels pederson", "author. educator. speaker."]
  const bannerTitle = (
    <Title
      color='white'
      title={titles[0]}
      subTitle={titles[1]}
    />)

  return (
    <div className={classes.root} >
      <div className={classes.bannerContainer}>
        <div className={classes.innerBanner} >
          <Banner
            title={bannerTitle}
          />
        </div>
      </div>
      <div>
        ABOUT PAGE
      </div>
    </div>
  )
}

export default About