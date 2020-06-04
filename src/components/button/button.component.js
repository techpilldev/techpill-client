import React, { useState } from 'react'

import { useStyles } from './button.styles.js'

const Button = ( props ) => {
  const { image, action } = props
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
    >{image}
    </div>
  )
}

export default Button