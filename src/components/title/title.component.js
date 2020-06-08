import React from 'react'
import {useStyles} from './title.styles.js'

const Title = ( props ) => {
  const { title, subTitle, color, titleSize, subTitleSize } = props
  const classes = useStyles()
  return (
    <div className={classes.root} >
      <h1 
        style={{color: color, fontSize: titleSize }} 
        className={classes.title}>
        {title}
      </h1>
      {subTitle !== null && (
        <h6 
          style={{ fontSize: subTitleSize }} 
          className={classes.subTitle}>
          {subTitle}
        </h6>
      )}
    </div>
  )
}

export default Title