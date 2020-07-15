import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// import { useStyles } from './blog-detail.styles'

const BlogDetail = (props) => {
  // const classes = useStyles()
  const { postID } = useParams()
  console.log("post id", postID)
  const [data, setData] = useState()

  const getData = async (postID) => {
    const result = await fetch(`http://api.thetechpill.com/blog-posts/${postID}`)
    const data = await result.json()
    console.log("POST DATA IN BLOG DETAIL", data)
  }

  useEffect(() => {
    getData(postID)
  }, [])

  return (
    <div>
      BLOG DETAILs
    </div>
  )
}

export default BlogDetail