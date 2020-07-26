import React from 'react'

import Searchbar from '../searchbar/searchbar.component'

import { useStyles } from './banner.styles.js'

const Banner = (props) => {
  const {
    desktopImage,
    mobileImage,
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
      <div className={classes.mobileImageContainer}>
        {mobileImage}
      </div>
      <div className={classes.descriptionContainer} >
        {description}
        {searchbar && searchbar}
      </div>
      <div className={classes.desktopContainer} >
        <div className={classes.desktopDetailsContainer} >
          {title}
          <div
            style={desColor !== null && { color: desColor }}
            className={classes.desktopDescription} >
            {description}
          </div>
        </div>
        <div className={classes.desktopImageContainer}>
          {desktopImage}
        </div>
      </div>
    </div>
  )
}

export default Banner