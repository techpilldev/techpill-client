import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '../button/button.component.js'
import Drawer from '../drawer/drawer.component.js'
import Nav from '../nav/nav.component.js'
import { useStyles } from './header.styles.js'

const Header = () => {
  const classes = useStyles()
  const [drawer, setDrawer] = useState(false)
  const [text, setText] = useState(null)
  const menuButton = <MenuIcon style={{ fontSize: 55 }} />

  const handleDrawer = () => {
    setDrawer(!drawer)
  }

  const getData = async () => {
    const res = await fetch(`http://api.stressfreegut.com/nav-text`)
    const data = await res.json()
    setText(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root} >
      <div className={classes.navContainer} >
        <Link className={classes.homeLink} to='/home' >
          {text && (
            text.text
          )}
        </Link>
        <Nav type="desktop" />
      </div>
      {drawer && (
        <Drawer
          drawer={drawer}
          handleDrawer={handleDrawer}
        />
      )}
      <div className={classes.buttonContainer} >
        <Button
          image={menuButton}
          action={handleDrawer}
        />
      </div>
    </div>
  )
}

export default Header