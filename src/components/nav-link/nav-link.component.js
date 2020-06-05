import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useStyles } from './nav-link.styles.js'

const NavLink = ( props ) => {
  const { linkUrl, pageName } = props
  const classes = useStyles()


  return (
    <div className={classes.root} >
      <Link 
        className={classes.navLink} 
        to={linkUrl}>
        {pageName}
      </Link>
    </div>
  )
}

export default NavLink