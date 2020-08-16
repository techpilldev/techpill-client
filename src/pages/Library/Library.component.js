import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    console.log("lib data>>>>>", libData)
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

  const handleClick = (URL) => {
    window.open(URL, '_blank')
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
        <div className={classes.aboutCard} >
          {data !== null && data.map((item, index) =>
            <div key={index} style={{ margin: '3%' }} >
              <h2 className={classes.bookHeading} >{item.title}</h2>
              <div >
                <img
                  onClick={() => handleClick(item.link)}
                  style={{ width: 200, height: 'auto', cursor: 'pointer' }}
                  src={`http://api.stressfreegut.com${item.image[0].url}`}
                />
              </div>
              <h2 onClick={() => handleClick(item.link)} className={classes.bookLink}>Read more</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Library