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

  const getData = async () => {
    let result = await fetch(`http://api.thetechpill.com/blog-posts`)
    let data = await result.json()
    setData(data)
    let res = await fetch(`http://api.thetechpill.com/recommended-reads`)
    let recReads = await res.json()
    setReads(recReads)
    console.log("rec in blog", recReads)
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
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Roboto' }} key={index} >
                <img
                  style={{ width: '100vw', height: '25vh', objectFit: 'cover' }}
                  src={`http://api.thetechpill.com${item.cover_image.url}`} />
                <div style={{ width: '90%', height: 'auto', border: '1px solid red', borderRadius: 15, background: 'white' }} >
                  <p>{posts.created_at}</p>
                  <h3 style={{ fontSize: '2em', textAlign: 'center', fontWeight: 'bold' }} >{item.title}</h3>
                  <hr style={{ color: 'lightgrey' }} />
                  <div >{item.body}</div>
                  <div >{item.author}</div>
                  <hr style={{ color: 'lightgrey' }} />
                  <div>
                    <h3 style={{ fontSize: '1.5em', textAlign: 'center', fontWeight: 'bolder' }} >References</h3>
                    <ReactMarkdown
                      source={item.notes_and_links}
                    />
                  </div>
                  <h3 style={{ fontSize: '1.5em', textAlign: 'center', fontWeight: 'bolder' }} >Recommended Reads</h3>
                  {reads.map((item, index) =>
                    <div key={index} style={{ width: '90%', height: 'auto', border: '1px solid red', display: 'flex', flexDirection: 'column', padding: '3%' }} >
                      <p style={{ fontWeight: 'bolder', paddingBottom: '2%' }} >{item.Recommended_Read.title}</p>
                      <img style={{ width: '25%', height: 'auto', cursor: 'pointer', paddingTop: '2%', paddingBottom: '2%' }} src={`http://api.thetechpill.com${item.Recommended_Read.image.url}`} />
                      <div >
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