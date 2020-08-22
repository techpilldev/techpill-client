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
    const result = await fetch(`${process.env.API}/tags/${tagID}`)
    const data = await result.json()
    const blogTags = data.blog_posts.map(item => item)
    const podcastTags = data.podcasts.map(item => item)
    const newArr = [...blogTags, ...podcastTags]
    setData(newArr.reverse())
    let tagRes = await fetch(`${process.env.API}/tags`)
    let tagData = await tagRes.json()
    setTags(tagData)
    let latRes = await fetch(`${process.env.API}/recommended-reads`)
    let letData = await latRes.json()
    setLatest(letData)
  }

  const truncateStr = (str, num) => {
    return str.slice(0, num) + '...'
  }

  const formatDate = (newDate) => {
    const date = new Date(newDate)
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
            data.map((post, index) =>
              <div key={index} className={classes.smallCard}>
                {post.body ? (
                  <Link to={`/blog-posts/${post.id}/`}>
                    <img
                      className={classes.smallImg}
                      src={`${process.env.API}${post.cover_image.url}`}
                    />
                  </Link>
                ) : (
                    <Link to={`/podcast-post/${post.id}/`}>
                      <img
                        className={classes.smallImg}
                        src={`${process.env.API}${post.cover_image.url}`}
                      />
                    </Link>
                  )}
                <div style={{ padding: '2%' }} >
                  <h3 className={classes.smallHeading} >{post.title}</h3>
                  <p className={classes.smallDate} >{formatDate(post.created_at)}</p>
                  {post.body ? (
                    <ReactMarkdown
                      className={classes.markdown}
                      source={truncateStr(post.body, 300)}
                    />) : (
                      <ReactMarkdown
                        className={classes.markdown}
                        source={truncateStr(post.notes_and_links, 300)}
                      />
                    )}
                  <br></br>
                  {post.body ? (
                    <Link to={`/blog-posts/${post.id}/`}>
                      <h3 style={{ color: '#2DC4EE', marginBottom: '2%' }}>Continue Reading</h3>
                    </Link>
                  ) : (
                      <Link to={`/podcast-post/${post.id}/`}>
                        <h3 style={{ color: '#2DC4EE', marginBottom: '2%' }}>Listen to Episode</h3>
                      </Link>
                    )}
                </div>
              </div>
            ))}
        </div>
        <div className={classes.sidebar} >
          <div className={classes.sidebarContainer1} >
            <h5 style={{ fontSize: '1.2em', marginBottom: '5%' }} >All tags</h5>
            {tags && (
              tags.map((tag, index) =>
                <Link key={index} to={`/tags/${tag.name}/${tag.id}/`} >
                  <p style={{ color: '#2DC4EE' }}>{tag.name} <span style={{ color: 'grey' }} >({tag.blog_posts.length + tag.podcasts.length})</span></p>
                </Link>
              )
            )}
          </div>
          <div className={classes.sidebarContainer2} >
            <h5 style={{ fontSize: '1.3em', marginBottom: '5%' }} >Library</h5>
            {latest !== null ? (
              latest.map((item, index) =>
                item.featured == true && (
                  <div key={index} style={{ margin: '3% 0% 3% 0%' }} >
                    <Link to={`/library`} >
                      <img
                        style={{ width: 200, height: 'auto', cursor: 'pointer' }}
                        src={`${process.env.API}${item.image[0].url}`}
                      />
                    </Link>
                    <Link to={`/library`}>
                      <h2 style={{ fontSize: '1.3em', color: '#2DC4EE' }}>Read more</h2>
                    </Link>
                  </div>
                ))
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