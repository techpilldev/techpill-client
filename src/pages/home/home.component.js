import React from 'react'

import Title from '../../components/title/title.component.js'
import Banner from '../../components//banner/banner.component.js'
import { robotDestop, robotMobile  } from '../../assets/svgs.js'
import { useStyles } from './home.styles.js'

const Home = () => {
  const classes = useStyles()
  const titles = ["THE TECH PILL", "TECHNOLOGICAL EDUCATION"]
  const bannerTitle = (
    <Title 
      color='black' 
      title={titles[0]} 
      subTitle={titles[1]}
    />)

  const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`

  return(
    <div className={classes.root} >
      <Banner 
        title={bannerTitle} 
        description={description} 
        mobileImage={robotMobile} 
        desktopImage={robotDestop}
      />
      <div>
        HOME PAGE
      </div>
    </div>
  )
}

export default Home