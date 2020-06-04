import React from 'react'
import SocialLinks from '../social-links/social-links.component.js'
import { Link } from 'react-router-dom'
import { useStyles } from './nav.styles.js'

const Nav = (props) => {
  const { type } = props
  const classes = useStyles()
  

  return(
    <div className={classes.root} >
      <ul 
        className={type === 'drawer' ? (
        classes.drawer):(classes.nav)}
      >
        <li className={classes.homeLink} >
          <Link className={classes.navLink} to="/home">Home</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/podcasts">Podcasts</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/blog">Blog</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/about">About</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/contact">Contact</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/latest-releases">Latest Releases</Link>
        </li>
      </ul>
      <div className={classes.socials} >
        <SocialLinks />
      </div>
    </div>
  )
}

export default Nav 