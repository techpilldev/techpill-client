import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './nav.styles.js'

const Nav = (props) => {
  const { type, action } = props
  const classes = useStyles()

  return(
    <ul 
      onClick={() => action(false)}
      className={type === 'drawer' ? (
      classes.drawer):(classes.nav)}
    >
      <li className={classes.lis} >
        <Link className={classes.navLink} to="/home">Home</Link>
      </li>
      <li className={classes.lis} >
        <Link className={classes.navLink} to="/podcast">Podcasts</Link>
      </li>
      <li className={classes.lis} >
        <Link className={classes.navLink} to="/blog">Blog</Link>
      </li>
      <li className={classes.lis} >
        <Link className={classes.navLink} to="/about">About</Link>
      </li>
      <li className={classes.lis} >
        <Link className={classes.navLink} to="/Contact">Contact</Link>
      </li>
      <li className={classes.lis} >
        <Link className={classes.navLink} to="/latest-releases">Latest Releases</Link>
      </li>
    </ul>
  )
}

export default Nav 