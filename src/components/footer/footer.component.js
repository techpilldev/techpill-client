import React from 'react'
import Title from '../title/title.component.js'
import BottomNav from '../bottom-nav/bottom-nav.component.js'

import { useStyles } from './footer.styles.js'

const Footer = () => {
  const classes = useStyles()

  return(
    <div className={classes.root} > 
      <div className={classes.innerContainer} >
        <div className={classes.titleContainer} >
            <Title
              title="THE TECH PILL"
              color='#2DC4EE'
              titleSize={30}
            />
        </div>
        <div className={classes.bottomNavContainer} >
          <BottomNav/>
        </div>
      </div>
      <div className={classes.copywrite} >
        © Niels Pederson 2020. All rights reserved
      </div>
    </div>
  )
}

export default Footer