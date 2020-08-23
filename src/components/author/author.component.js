import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useStyles } from './author.styles'

const AuthorCard = (props) => {
  const { title } = props
  const classes = useStyles()
  const {
    root,
    container,
    imageCnt,
    name,
    author,
    image,
    bio
  } = classes
  const [data, setData] = useState(null)

  const getData = async () => {
    const result = await fetch(`${process.env.API}/about-page`)
    const data = await result.json()
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const truncateStr = (str, num) => {
    return str.slice(0, num) + '...'
  }

  return (
    <div className={root}>
      <div className={author} >{title}</div>
      {data && (
        <Link className={container} to='/about' >
          <div className={imageCnt} >
            <img
              src={`${process.env.API}${data.image.url}`}
              className={image}
            />
          </div>
          <div>
            <div className={name} >
              {data.title}
            </div>
            <p className={bio}>
              {truncateStr(data.body, 150)}
            </p>
          </div>
        </Link>
      )}
    </div>
  )
}

export default AuthorCard



