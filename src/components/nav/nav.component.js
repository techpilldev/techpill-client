import React from 'react'
import SocialLinks from '../social-links/social-links.component.js'
import { Link } from 'react-router-dom'
import NavLink from '../nav-link/nav-link.component.js'
import { useStyles } from './nav.styles.js'

const Nav = (props) => {
  const { type } = props
  const classes = useStyles()


  console.log(window.location.pathname)
  return(
    <div className={classes.root} >
      <ul 
        className={type === 'drawer' ? (
        classes.drawer):(classes.nav)}
      >
        <li className={classes.homeLink} >
          <NavLink linkUrl="/home" pageName="Home" />
        </li>
        <li className={classes.link} >
          <NavLink linkUrl="/podcasts" pageName="Podcasts" />
        </li>
        <li className={classes.link} >
          <NavLink linkUrl="/blog" pageName="Blog" />
        </li>
        <li className={classes.link} >
          <NavLink linkUrl="/about" pageName="About" />
        </li>
        <li className={classes.link} >
          <NavLink linkUrl="/contact" pageName="Contact" />
        </li>
        <li className={classes.link} >
          <NavLink linkUrl="/latest-releases" pageName="Latest Releases" />
        </li>
      </ul>
      <div className={classes.socials} >
        <SocialLinks />
      </div>
    </div>
  )
}

export default Nav 