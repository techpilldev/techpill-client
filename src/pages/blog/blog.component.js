import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

import Title from '../../components/title/title.component.js'
import Banner from '../../components/banner/banner.component.js'
import { cables, cables2 } from '../../assets/svgs.js'
import { useStyles } from './blog.styles.js'

const Blog = () => {
  const classes = useStyles()
  const titles = ["BLOG", "let's talk tech"]
  const [data, setData] = useState(null)
  const [reads, setReads] = useState(null)

  const bannerTitle = (
    <Title
      color='black'
      title={titles[0]}
      subTitle={titles[1]}
    />)

  const description = `To find a specific article please search here`

  const formatDate = () => {
    const date = new Date(data[0].created_at)
    const fmtDate = date.toString().split("G")
    return fmtDate[0]
  }

  const getData = async () => {
    let result = await fetch(`http://api.thetechpill.com/blog-posts`)
    let data = await result.json()
    setData(data)
    let res = await fetch(`http://api.thetechpill.com/recommended-reads`)
    let recReads = await res.json()
    setReads(recReads)
  }

  const truncateStr = (str, num) => {
    return str.slice(0, num) + '...'
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root} >
      <Banner
        title={bannerTitle}
        description={description}
        mobileImage={cables}
        desktopImage={cables2}
      />
      <div className={classes.mainContainer} >
        <div className={classes.headingContainer} >
          <div style={{ alignSelf: 'flex-start' }} className={classes.featuredHeading} >Featured Article</div>
        </div>
        <div className={classes.outerContainer} >
          {reads && (
            data.map((post, index) =>
              post.featured === true && (
                <div className={classes.blogCardContainer} key={index} >
                  <img
                    className={classes.blogImage}
                    src={`http://api.thetechpill.com${post.cover_image.url}`} />
                  <div className={classes.blogCard} >
                    <p className={classes.blogDate} >{formatDate(post.created_at)}</p>
                    <h3 className={classes.blogHeading} >{post.title}</h3>
                    <hr className={classes.blogHr} />
                    <div className={classes.blogBody}  >
                      <div className={classes.innderBody} >
                        <ReactMarkdown source={truncateStr(post.body, 550)} />
                        <br></br>
                        <Link to={`/blog-posts/${post.id}/`}>
                          <h3 style={{ color: '#2DC4EE' }}  >Continue Reading</h3>
                        </Link>
                      </div>

                      <div className={classes.authorContainer}  >

                      </div>
                    </div>
                    <h3 className={classes.tagsHeading} >Tags</h3>
                    <div className={classes.linksContainer} >
                      {post.tags.map((item, index) => <p
                        key={index}
                        className={classes.link}
                        onClick={() => { console.log('item.name>>>>', item.name) }}
                      >{item.name}
                      </p>)}
                    </div>
                  </div>
                </div>
              )
            )
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', lineHeight: 1.5, marginBottom: '5%' }} >
          {reads && (
            data.map((post, index) =>
              !post.featured === true && (
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
                      <h3 style={{ color: '#2DC4EE' }}  >Continue Reading</h3>
                    </Link>
                  </div>
                </div>
              ))
          )}
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Blog