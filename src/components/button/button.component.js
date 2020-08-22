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

  useEffect(() => {
    console.log("imgLink >>> ", imgLink)
  }, [])

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
        <img style={{ width: 30, height: 30 }} src={`http://api.stressfreegut.com${imgLink}`} />
      ) : (
          image
        )}

    </div>
  )
}

export default Button