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

    console.log('DATA >>> ', data)
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

              post.featured === true ? (
                <div className={classes.blogCardContainer} key={index} >
                  <img
                    className={classes.blogImage}
                    src={`http://api.thetechpill.com${post.cover_image.url}`} />
                  <div className={classes.blogCard} >
                    <p className={classes.blogDate} >{formatDate(post.created_at)}</p>
                    <h3 className={classes.blogHeading} >{post.title}</h3>
                    <hr className={classes.blogHr} />
                    <div className={classes.blogBody}  >{post.body}</div>
                    <br></br>
                    <div className={classes.blogAuthor}  > - {post.author}</div>
                    <hr className={classes.blogHr} />
                    <div className={classes.mardownContainer} >
                      <h3 className={classes.referenceHeading} >References</h3>
                      <ReactMarkdown
                        source={post.notes_and_links}
                      />
                    </div>
                    <h3 className={classes.referenceHeading} >Tags</h3>
                    <div className={classes.linksContainer} >
                      {post.tags.map((item, index) => <p
                        key={index}
                        className={classes.link}
                        onClick={() => { console.log('item.name>>>>', item.name) }}
                      >{item.name}
                      </p>)}
                    </div>
                    <h3 className={classes.recommendedHeading} >Recommended Reads</h3>
                    {reads.map((item, index) =>
                      <div key={index} className={classes.recommendedContainer} >
                        <img className={classes.recommendedImage} src={`http://api.thetechpill.com${item.Recommended_Read.image.url}`} />
                        <div className={classes.recommendedImageContainer}  >
                          <p className={classes.recommendedTitle} >{item.Recommended_Read.title}</p>
                          <p
                            className={classes.link}
                            onClick={() => { window.open(item.Recommended_Read.link, '_blank'); }}
                          >On Amazon
                        </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                  <div>Insert other posts here</div>
                )
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Blog