import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/title/title.component.js'
import Banner from '../../components//banner/banner.component.js'

import { useStyles } from './about.styles.js'

const About = () => {
  const classes = useStyles()
  const [data, setData] = useState()
  const titles = ["Niels pederson", "author. educator. speaker."]
  const bannerTitle = (
    <Title
      color='white'
      title={titles[0]}
      subTitle={titles[1]}
    />)

  const getData = async () => {
    const result = await fetch(`http://api.stressfreegut.com/about-page`)
    const data = await result.json()
    console.log("data", data)
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root} >
      <div className={classes.bannerContainer}>
        <div className={classes.innerBanner} >
          <Banner
            title={bannerTitle}
          />
        </div>
      </div>
      <div className={classes.cardContainer} >
        {data && (
          <div className={classes.aboutCard} >
            <h3 className={classes.aboutTitle}>{data.title}</h3>
            <img className={classes.aboutImage} src={`http://api.stressfreegut.com${data.image.url}`} />
            <div className={classes.aboutBody}>
              {data.body}
              <div style={{ alignSelf: 'center' }} className={classes.aboutBtn} >
                <Link to='/contact' >
                  <div className={classes.aboutText}>Contact Niels</div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default About

