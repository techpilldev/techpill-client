import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

import Title from '../../components/title/title.component.js'
import Banner from '../../components/banner/banner.component.js'
import AuthorCard from '../../components/author/author.component'
import { cables, cables2 } from '../../assets/svgs.js'
import { useStyles } from './blog.styles.js'
import Searchbar from '../../components/searchbar/searchbar.component.js'

const Blog = () => {
  const classes = useStyles()
  const titles = ["BLOG", "let's talk tech"]
  const [data, setData] = useState(null)
  const [tags, setTags] = useState(null)
  const [latest, setLatest] = useState(null)
  const [search, setSearch] = useState('')
  const description = `To find a specific article please search here`
  const bannerTitle = (
    <Title
      color='black'
      title={titles[0]}
      subTitle={titles[1]}
    />)

  const getData = async () => {
    let result = await fetch(`http://api.stressfreegut.com/blog-posts`)
    let data = await result.json()
    setData(data)
    let tagRes = await fetch(`http://api.stressfreegut.com/tags`)
    let tagData = await tagRes.json()
    setTags(tagData)
    let latRes = await fetch(`http://api.stressfreegut.com/latest-releases`)
    let letData = await latRes.json()
    setLatest(letData)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const searchbar = (
    <Searchbar
      placeholder={'Search by title or keywords..'}
      handleChange={handleChange}
    />
  )

  const formatDate = (date) => {
    const dateObj = new Date(date)
    const fmtDate = dateObj.toString().split("G")
    return fmtDate[0]
  }
  const truncateStr = (str, num) => {
    return str.slice(0, num) + '...'
  }

  useEffect(() => {
    getData()
  }, [])

  let filteredPosts
  if (data !== null) {
    filteredPosts = data.filter(post => (
      post.body.toLowerCase().includes(search.toLowerCase()))
      ||
      post.title.toLowerCase().includes(search.toLowerCase()
      ))
  }

  return (
    <div className={classes.root} >
      <Banner
        title={bannerTitle}
        description={description}
        mobileImage={cables}
        desktopImage={cables2}
        searchbar={searchbar}
      />
      <div className={classes.mainContainer} >
        <div className={classes.headingContainer} >
          <div style={{ alignSelf: 'flex-start' }} className={classes.featuredHeading} >{search == '' ? 'Featured Article' : ''} </div>
        </div>
        <div className={classes.outerContainer} >
          {filteredPosts && (
            filteredPosts.map((post, index) =>
              post.featured === true && (
                <div className={classes.blogCardContainer} key={index} >
                  <img
                    className={classes.blogImage}
                    src={`http://api.stressfreegut.com${post.cover_image.url}`} />
                  <div className={classes.blogCard} >
                    <p className={classes.blogDate} >{formatDate(post.created_at)}</p>
                    <h3 className={classes.blogHeading} >{post.title}</h3>
                    <hr className={classes.blogHr} />
                    <div className={classes.blogBody}  >

                      <div className={classes.innderBody} >
                        <ReactMarkdown source={truncateStr(post.body, 550)} />
                        <br></br>
                        <Link style={{ width: 160, marginTop: '5%' }} to={`/blog-posts/${post.id}/`}>
                          <h3 className={classes.detailLink}  >Continue Reading</h3>
                        </Link>
                      </div>

                      <div className={classes.authorContainer} >
                        <AuthorCard title='Author' />
                      </div>

                    </div>
                    <h3 className={classes.tagsHeading} >Tags</h3>
                    <div className={classes.linksContainer} >
                      {post.tags.map((item, index) =>
                        <Link className={classes.link} key={index} to={`/tags/${item.name}/${item.id}/`} >
                          <p style={{ color: '#2DC4EE' }}>{item.name} </p>
                        </Link>)}
                    </div>
                  </div>
                </div>
              )
            )
          )}
        </div>
        <div className={classes.container2} >
          <div className={classes.smallCardContainer} >
            {filteredPosts && (
              filteredPosts.map((post, index) =>
                !post.featured === true && (
                  <div key={index} className={classes.smallCard} >
                    <img
                      className={classes.smallImg}
                      src={`http://api.stressfreegut.com${post.cover_image.url}`}
                    />
                    <div style={{ padding: '2%' }} >
                      <h3 className={classes.smallHeading} >{post.title}</h3>
                      <p className={classes.smallDate} >{formatDate(post.created_at)}</p>
                      <ReactMarkdown className={classes.markdown} source={truncateStr(post.body, 300)} />
                      <Link to={`/blog-posts/${post.id}/`}>
                        <h3 style={{ color: '#2DC4EE' }}>Continue Reading</h3>
                      </Link>
                    </div>
                  </div>
                ))
            )}
          </div>
          <div className={classes.sidebar} >
            <div className={classes.sidebarContainer1} >
              <h5 style={{ fontSize: '1.3em', marginBottom: '5%' }} >All tags</h5>
              {tags && (
                tags.map((tag, index) =>
                  <Link
                    style={{ width: '50%' }}
                    key={index}
                    to={`/tags/${tag.name}/${tag.id}/`}
                  >
                    <p style={{ color: '#2DC4EE' }}>
                      {tag.name}
                      <span style={{ color: 'grey' }}>
                        ({tag.blog_posts.length})
                      </span>
                    </p>
                  </Link>
                )
              )}
            </div>
            <div className={classes.sidebarContainer2} >
              <h5 style={{ fontSize: '1.3em', marginBottom: '5%' }} >Read this:</h5>
              {latest !== null ? (
                latest.map((item, index) =>
                  <div key={index} >
                    <Link to={`/latest-releases`} >
                      <img
                        style={{ width: 200, height: 'auto', cursor: 'pointer' }}
                        src={`http://api.stressfreegut.com${item.latest.cover_image.url}`}
                      />
                    </Link>
                    <p style={{ width: 200, margin: '3% 0% 3% 0%' }} >{truncateStr(item.latest.description, 150)}</p>
                    <Link to={`/latest-releases`}>
                      <h2 style={{ fontSize: '1.3em', color: '#2DC4EE' }}>Read more</h2>
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
    </div>
  )
}

export default Blog