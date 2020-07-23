import React from 'react'
import { Link } from 'react-router-dom'

import { useStyles } from './author.styles'

const AuthorCard = () => {
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


  return (
    <div className={root}>
      <div className={author} >AUTHOR</div>
      <Link className={container} to='/about' >
        <div className={imageCnt} >
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQEk1DPCbPv6yQ/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=z2ENDBsAhjeW87LAYkrOa1B-V4MomNifW2_K9z5B7L4"
            className={image}
          />
        </div>
        <div>
          <div className={name} >
            Niels Pederson
          </div>
          <p className={bio} >
            Business-to-consumer value proposition innovator partnership technology client beta.
          </p>
        </div>
      </Link>
    </div>
  )
}

export default AuthorCard



