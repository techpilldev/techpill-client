import React, {useState, useEffect} from 'react'
import SocialLinks from '../social-links/social-links.component.js'
import NavLinkItem from '../nav-link/nav-link.component.js'
import { useStyles } from './nav.styles.js'

const Nav = (props) => {
  const { type, action } = props
  const classes = useStyles()
  const [pages, setPages] = useState([])

  const pagesArr = [
    // ['/home', 'Home'],
    ['/podcasts', 'Podcasts'],
    ['/blog', 'Blog'],
    ['/about', 'About'],
    ['/contact', 'Contact'],
    ['/latest-releases', 'Latest Releases']
  ]

  useEffect(() => {
    setPages(pagesArr)
  }, [])

  return(
    <div className={classes.root} >
      <ul 
        className={type === 'drawer' ? (
          classes.drawer):(classes.nav
        )}
      >
      {pages.map((item, index) => (
        <li 
          key={index} 
          onClick={action}
          className={item[1] === "Home" ? 
            (classes.homeLink):(classes.link)} 
          >
          <NavLinkItem 
            linkUrl={item[0]} 
            pageName={item[1]} 
          />
        </li>
      ))}
      </ul>
      <div className={classes.socials} >
        <SocialLinks />
      </div>
    </div>
  )
}

export default Nav 