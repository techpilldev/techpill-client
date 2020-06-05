import React from 'react'
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
        <li style={{paddingRight: '3%'}} className={classes.link} >
          <Link className={classes.navLink} to="/blog">Blog</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/contact">Contact</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/about">About</Link>
        </li>
        <li className={classes.link} >
          <Link className={classes.navLink} to="/latest-releases">Latest Releases</Link>
        </li>
        <li style={{ paddingRight: '1.5%' }} className={classes.link} >
          <Link className={classes.navLink} to="/legal">Legal</Link>
        </li>
      </ul>
    </div>
  )
}

export default BottomNav 