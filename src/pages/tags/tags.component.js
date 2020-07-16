import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'


import { useStyles } from './tags.styles'

const TagResult = () => {
  const classes = useStyles()
  const { tagID, tagName } = useParams()
  const [data, setData] = useState(null)
  const [tags, setTags] = useState(null)
  const [latest, setLatest] = useState(null)


  const getData = async () => {
    const result = await fetch(`http://api.thetechpill.com/tags/${tagID}`)
    const data = await result.json()
    setData(data)
    let tagRes = await fetch(`http://api.thetechpill.com/tags`)
    let tagData = await tagRes.json()
    setTags(tagData)
    let latRes = await fetch(`http://api.thetechpill.com/latest-releases`)
    let letData = await latRes.json()
    setLatest(letData)
  }

  const truncateStr = (str, num) => {
    return str.slice(0, num) + '...'
  }

  const formatDate = () => {
    const date = new Date(data.created_at)
    const fmtDate = date.toString().split("G")
    return fmtDate[0]
  }

  useEffect(() => {
    getData()
  }, [data])

  return (
    <div style={{ margin: '5% 5% 5% 5%' }}>
      <h2 className={classes.heading} >{tagName}</h2>
      <div className={classes.container2} >
        <div className={classes.smallCardContainer} >
          {data !== null && (
            data.blog_posts.map((post, index) =>
              <div key={index} className={classes.smallCard} >
                <img
                  className={classes.smallImg}
                  src={`http://api.thetechpill.com${post.cover_image.url}`}
                />
                <div style={{ padding: '2%' }} >
                  <h3 className={classes.smallHeading} >{post.title}</h3>
                  <p className={classes.smallDate} >{formatDate(post.created_at)}</p>
                  <ReactMarkdown className={classes.markdown} source={truncateStr(post.body, 300)} />
                  <br></br>
                  <Link to={`/blog-posts/${post.id}/`}>
                    <h3 style={{ color: '#2DC4EE', marginBottom: '2%' }}>Continue Reading</h3>
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className={classes.sidebar} >
          <div className={classes.sidebarContainer1} >
            <h5 style={{ marginBottom: '5%' }} >All tags</h5>
            {tags && (
              tags.map((tag, index) =>
                <Link key={index} to={`/tags/${tag.name}/${tag.id}/`} >
                  <p style={{ color: '#2DC4EE' }}>{tag.name} <span style={{ color: 'grey' }} >({tag.blog_posts.length})</span></p>
                </Link>
              )
            )}
          </div>
          <div className={classes.sidebarContainer2} >
            {latest !== null ? (
              latest.map((item, index) =>
                <div key={index} >
                  <Link to={`/latest-releases`} >
                    <img
                      style={{ width: 200, height: 'auto', cursor: 'pointer' }}
                      src={`http://api.thetechpill.com${item.latest.cover_image.url}`}
                    />
                  </Link>
                  <p style={{ width: 200, margin: '3% 0% 3% 0%' }} >{truncateStr(item.latest.description, 50)}</p>
                  <Link to={`/latest-releases`}>
                    <h2 style={{ color: '#2DC4EE' }}>Read more</h2>
                  </Link>
                </div>
              )
            ) : (
                <div></div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TagResult