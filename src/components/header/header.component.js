import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '../button/button.component.js'
import Title from '../title/title.component.js'
import Drawer from '../drawer/drawer.component.js'
import Nav from '../nav/nav.component.js'
import {useStyles} from './header.styles.js'

const Header = () => {
  const classes = useStyles()
  const [drawer, setDrawer] = useState(false)
  const menuButton = <MenuIcon style={{ fontSize: 55 }}/>
  const titles = ["TECH PILL", "TECHNOLOGICAL EDUCATION"]

  const handleDrawer = () => {
    setDrawer(!drawer)
  }

  return(
    <div className={classes.root} >
      <div className={classes.navContainer} >
        <Link style={{textDecoration: 'none', width: '45%'}} to='/home' >
            <Title
              color='white'
              title={titles[0]}
              style={{ cursor: 'pointer' }}
            />
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