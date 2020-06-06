import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import Button from '../button/button.component.js'
import Nav from '../nav/nav.component.js'
import {useStyles} from './drawer.styles.js'


const Drawer = (props) => {
  const { handleDrawer } = props
  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const closeButton = <CloseIcon style={{ fontSize: 55 }} />

  const closeDrawer = () => {
    setOpen(!open)
  }

  return(
    <div 
      className={open ? classes.rootOpen : classes.rootClose }
      onAnimationEnd={!open ? () => handleDrawer() : () => console.log('')}
    >
      <div className={classes.buttonContainer} >
        <Button
          image={closeButton}
          action={closeDrawer}
        />
      </div>
      <div className={classes.navContainer} >
        <Nav action={closeDrawer} type="drawer" />
      </div>
    </div>
  )
}

export default Drawer 