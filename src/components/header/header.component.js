import React, { useState, useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu'

import Button from '../button/button.component.js'
import Title from '../title/title.component.js'
import Drawer from '../drawer/drawer.component.js'
import Nav from '../nav/nav.component.js'

import {useStyles} from './header.styles.js'


const Header = () => {
  const classes = useStyles()
  const [ drawer, setDrawer ] = useState(false)
  const menuButton = <MenuIcon style={{ fontSize: 55 }}/>
  const titles = ["TECH PILL", "TECHNOLOGICAL EDUCATION"]

  const handleDrawer = () => {
    setDrawer(!drawer)
  }

  return(
    <div className={classes.root} >
      <div className={classes.navContainer} >
        <Title
          color='white'
          title={titles[0]}
        />
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
      <div className={classes.titleContainer} >
        <Title 
          color='black'
          title={titles[0]}
          subTitle={titles[1]} 
        />
      </div>
      <div className={classes.imageContainer}>
        IMAGE HERE
      </div>
      <div className={classes.descriptionContainer}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      </div>
    </div>
  )
}

export default Header