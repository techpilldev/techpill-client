import React, { useState, useEffect } from 'react'
import Title from '../../components/title/title.component'
import Banner from '../../components/banner/banner.component'
import { useStyles } from './library.styles.js'


const Library = () => {
  const classes = useStyles()
  const [title, setTitle] = useState(null)
  const [data, setData] = useState(null)

  const getData = async () => {
    const result = await fetch(`http://api.stressfreegut.com/library`)
    const data = await result.json()
    setTitle(data)
    const libRes = await fetch(`http://api.stressfreegut.com/recommended-reads`)
    const libData = await libRes.json()
    setData(libData)
  }

  let podTitle = null;
  if (title !== null) {
    podTitle = (
      <Title
        color='white'
        title={title.Title}
        subTitle={title.Subtitle}
      />)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root} >
      <div className={classes.bannerContainer}>
        <div>
          {title && (
            <Banner
              title={podTitle}
            />
          )}
        </div>
      </div>
      <div className={classes.cardContainer} >
        {data && (
          <div className={classes.aboutCard} >
            Books here
          </div>
        )}
      </div>
    </div>
  )
}

export default Library