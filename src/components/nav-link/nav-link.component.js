import React from 'react'
import { NavLink } from 'react-router-dom'

import { useStyles } from './nav-link.styles.js'

const NavLinkItem = ( props ) => {
  const { linkUrl, pageName } = props
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <NavLink 
        activeClassName={classes.navLinkActive}
        className={classes.navLink} 
        to={linkUrl}
      > {pageName}
      </NavLink>
    </div>
  )
}

export default NavLinkItem