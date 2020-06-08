import React from 'react'

import Title from '../../components/title/title.component.js'
import Banner from '../../components/banner/banner.component.js'
import { cables, cables2 } from '../../assets/svgs.js'
import { useStyles } from './blog.styles.js'

const Blog = () => {
  const classes = useStyles()
  const titles = ["BLOG", "let's talk tech"]
  const bannerTitle = (
    <Title
      color='black'
      title={titles[0]}
      subTitle={titles[1]}
    />)

  const description = `To find a specific article please search here`

  return (
    <div className={classes.root} >
      <Banner
        title={bannerTitle}
        description={description}
        mobileImage={cables}
        desktopImage={cables2}
      />
      <div>
        Blog page
      </div>
    </div>
  )
}

export default Blog