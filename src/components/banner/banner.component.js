import React from 'react'

import { useStyles } from './banner.styles.js'

const Banner = (props) => {
  const {
    desktopImage,
    title,
    description,
    bgColor,
    desColor,
    searchbar,
  } = props

  const classes = useStyles()

  return (
    <div
      style={bgColor !== null && { background: bgColor }}
      className={classes.root} >
      <div className={title !== null && classes.titleContainer} >
        {title}
      </div>
      <div
        style={desColor !== null && { color: desColor }}
        className={classes.descriptionContainer} >
        {description}
        {searchbar && searchbar}
      </div>
      <div className={classes.desktopContainer} >
        <div className={classes.desktopDetailsContainer} >
          {title}
          <div
            style={desColor !== null && { color: desColor }}
            className={
              classes.desktopDescription
            }>
            {description}
            {searchbar && searchbar}
          </div>
        </div>
        <div className={classes.desktopImageContainer}>
          <img src={`http://api.stressfreegut.com${desktopImage}`} />
        </div>
      </div>
    </div>
  )
}

export default Banner