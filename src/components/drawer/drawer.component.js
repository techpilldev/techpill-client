import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

import SocialLinks from '../social-links/social-links.component.js'
import Button from '../button/button.component.js'
import Nav from '../nav/nav.component.js'
import {useStyles} from './drawer.styles.js'


const Drawer = (props) => {
  const { handleDrawer } = props
  const classes = useStyles()
  const closeButton = <CloseIcon style={{ fontSize: 55 }} />

  return(
    <div className={classes.root} >
      <div className={classes.buttonContainer} >
        <Button
          image={closeButton}
          action={handleDrawer}
        />
      </div>
      <div className={classes.navContainer} >
        <Nav action={handleDrawer} type="drawer" />
      </div>
    </div>
  )
}

export default Drawer 