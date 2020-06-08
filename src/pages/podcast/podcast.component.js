import React from 'react'

import Title from '../../components/title/title.component.js'
import Banner from '../../components/banner/banner.component.js'
import { cables, cables2 } from '../../assets/svgs.js'
import { useStyles } from './podcast.style.js'

const Podcasts = () => {
  const classes = useStyles()
  const titles = ["Podcasts", "let's talk tech"]
  const bannerTitle = (
    <Title
      color='black'
      title={titles[0]}
      subTitle={titles[1]}
    />)

  const description = `To find a specific episode please search here`

  return (
    <div className={classes.root} >
      <Banner
        title={bannerTitle}
        description={description}
        mobileImage={cables}
        desktopImage={cables2}
      />
      <div>
        Podcast page
      </div>
    </div>
  )
}

export default Podcasts