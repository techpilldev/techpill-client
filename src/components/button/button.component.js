import React, { useState, useEffect } from 'react'

import { useStyles } from './button.styles.js'

const Button = (props) => {
  const { image, action, imgLink } = props
  const classes = useStyles()
  const [isPressed, setIsPressed] = useState()

  const handlePress = (event) => {
    if (event.type === 'mousedown') {
      setIsPressed(true)
    } else {
      setIsPressed(false)
    }
  }

  const handleClick = () => {
    action()
  }

  return (
    <div
      onClick={() => handleClick()}
      onMouseDown={handlePress}
      onMouseUp={handlePress}
      onMouseLeave={handlePress}
      className={isPressed ? (
        classes.pressed
      ) : (
          classes.released
        )}
    >
      {imgLink ? (
        <img style={{ width: 30, height: 30 }} src={`${process.env.API}${imgLink}`} />
      ) : (
          image
        )}

    </div>
  )
}

export default Button