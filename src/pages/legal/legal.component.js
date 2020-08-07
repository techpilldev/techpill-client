import React, { useState, useEffect } from 'react'
import Banner from '../../components//banner/banner.component.js'

import { useStyles } from './legal.styles.js'

const Legal = () => {
  const classes = useStyles()
  const [data, setData] = useState()

  const getData = async () => {
    const result = await fetch(`http://api.stressfreegut.com/legal`)
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
          />
        </div>
      </div>
      <div className={classes.cardContainer} >
        {data && (
          <div className={classes.legalCard} >
            <h3 className={classes.legalTitle}>{data.title}</h3>
            <div className={classes.legalBody}>
              {data.body}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Legal