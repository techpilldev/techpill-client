import React from 'react'

import { useStyles } from './banner.styles.js'

const Banner = (props) => {
  const { desktopImage, mobileImage, title, description } = props
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <div className={classes.titleContainer} >
        {title}
      </div>
      <div className={classes.mobileImageContainer}>
        {mobileImage}
      </div>
      <div className={classes.descriptionContainer} >
        {description}
      </div>

      <div className={classes.desktopContainer} >
        <div className={classes.desktopDetailsContainer} >
          {title}
          <div className={classes.desktopDescription} >
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