import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/title/title.component.js'
import Banner from '../../components//banner/banner.component.js'
import ReactMarkdown from 'react-markdown'

import { useStyles } from './about.styles.js'

const About = () => {
  const classes = useStyles()
  const [data, setData] = useState(null)

  const getData = async () => {
    const result = await fetch(`http://api.stressfreegut.com/about-page`)
    const data = await result.json()
    setData(data)
  }

  let podTitle = null;
  if (data !== null) {
    podTitle = (
      <Title
        color='white'
        title={data.title}
        subTitle={data.Subtitle}
      />)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root} >
      <div className={classes.bannerContainer}>
        <div className={classes.innerBanner} >
          {data && (
            <Banner
              title={podTitle}
            />
          )}
        </div>
      </div>
      <div className={classes.cardContainer} >
        {data && (
          <div className={classes.aboutCard} >
            <h3 className={classes.aboutTitle}>Meet {data.title}</h3>
            <img className={classes.aboutImage} src={`http://api.stressfreegut.com${data.image.url}`} />
            <div className={classes.aboutBody}>
              <ReactMarkdown
                className={classes.mardown}
                source={data.body}
              />
              <div style={{ alignSelf: 'center' }} className={classes.aboutBtn} >
                <Link to='/free-guide' >
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

