import React, { useState, useEffect } from 'react'
import Button from '../button/button.component'
import { useStyles } from './social-links.styles.js'

const SocialLinks = () => {
  const classes = useStyles()
  const [data, setData] = useState(null)

  const handleClick = (URL) => {
    window.open(URL, '_blank')
  }

  const getData = async () => {
    const res = await fetch(`${process.env.API}/social-links`)
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root} >
      {data && (
        data.map((item, index) => {
          return (
            <Button
              key={index}
              imgLink={item.icon.url}
              action={() => handleClick(item.link)}
            />
          )
        })
      )}
    </div>
  )
}

export default SocialLinks