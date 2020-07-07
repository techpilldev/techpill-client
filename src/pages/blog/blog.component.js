import React, { useState, useEffect } from 'react'

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
    // console.log("rec in blog", recRead

    // const date = new Date(data[0].created_at)
    // const fmtDate = date.toString().split("G")

    // console.log('fmt DATE >>>>', fmtDate[0])
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
      <div>
        {reads && (
          data.map((posts, index) =>
            posts.blog_post.map((item, index) =>
              <div className={classes.blogCardContainer} key={index} >
                <img
                  className={classes.blogImage}
                  src={`http://api.thetechpill.com${item.cover_image.url}`} />
                <div className={classes.blogCard} >
                  <p>{formatDate(posts.created_at)}</p>
                  <h3 className={classes.blogHeading} >{item.title}</h3>
                  <hr className={classes.blogHr} />
                  <div className={classes.blogBody}  >{item.body}</div>
                  <br></br>
                  <div style={{ fontSize: '1.2em' }}  > - {item.author}</div>
                  <hr className={classes.blogHr} />
                  <div>
                    <h3 className={classes.referenceHeading} >References</h3>
                    <ReactMarkdown
                      source={item.notes_and_links}
                    />
                  </div>
                  <h3 className={classes.recommendedHeading} >Recommended Reads</h3>
                  {reads.map((item, index) =>
                    <div key={index} className={classes.recommendedContainer} >
                      <img className={classes.recommendedImage} src={`http://api.thetechpill.com${item.Recommended_Read.image.url}`} />
                      <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', marginLeft: '3%' }}  >
                        <p className={classes.recommendedTitle} >{item.Recommended_Read.title}</p>
                        <ReactMarkdown
                          style={{ padding: '1%' }}
                          source={item.Recommended_Read.link}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  )
}

export default Blog