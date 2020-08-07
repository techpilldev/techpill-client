import React from 'react'

import SocialLinks from '../social-links/social-links.component.js'
import { Link } from 'react-router-dom'
import { useStyles } from './bottom-nav.styles.js'

const BottomNav = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <ul className={classes.nav}>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/podcasts">Podcasts</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/blog">Blog</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/contact">Contact</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/about">About</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/library">Library</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/legal">Legal</Link>
        </li>
      </ul>
      <div className={classes.socials} >
        <SocialLinks />
      </div>
    </div>
  )
}

export default BottomNav 