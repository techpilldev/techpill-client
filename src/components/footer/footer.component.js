import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Title from '../title/title.component.js'
import BottomNav from '../bottom-nav/bottom-nav.component.js'

import { useStyles } from './footer.styles.js'

const Footer = () => {
  const classes = useStyles()
  const [text, setText] = useState(null)

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
      <div className={classes.innerContainer} >
        <div style={{ display: 'flex', justifyContent: 'center' }} >
          <Link className={classes.titleContainer} to='/home' >
            {text && (
              <Title
                title={text.text}
                color='#2DC4EE'
                titleSize={30}
              />
            )}
          </Link>
        </div>
        <div className={classes.bottomNavContainer} >
          <BottomNav />
        </div>
      </div>
      <div className={classes.copywrite} >
        © Niels Pederson 2020. All rights reserved
      </div>
    </div>
  )
}

export default Footer