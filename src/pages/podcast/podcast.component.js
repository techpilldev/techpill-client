import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import Title from '../../components/title/title.component.js'
import Banner from '../../components/banner/banner.component.js'
import AuthorCard from '../../components/author/author.component'
import { useStyles } from './podcast.style.js'
import Searchbar from '../../components/searchbar/searchbar.component.js'


const Podcasts = () => {
  const classes = useStyles()
  const [data, setData] = useState(null)
  const [tags, setTags] = useState(null)
  const [latest, setLatest] = useState(null)
  const [title, setTitle] = useState(null)
  const [search, setSearch] = useState('')
  const description = `To find a specific article please search here`


  const getData = async () => {
    let result = await fetch(`http://api.stressfreegut.com/podcasts`)
    let data = await result.json()
    setData(data)
    let tagRes = await fetch(`http://api.stressfreegut.com/tags`)
    let tagData = await tagRes.json()
    setTags(tagData)
    let latRes = await fetch(`http://api.stressfreegut.com/recommended-reads`)
    let letData = await latRes.json()
    setLatest(letData)
    let titleRes = await fetch(`http://api.stressfreegut.com/podcast-page`)
    let titleData = await titleRes.json()
    setTitle(titleData)
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

  let podTitle = null;
  if (title !== null) {
    podTitle = (
      <Title
        color='black'
        title={title.Title}
        subTitle={title.Subtitle}
      />)
  }


  useEffect(() => {
    getData()
  }, [])

  let filteredPosts
  if (data !== null) {
    filteredPosts = data.filter(post => (
      post.notes_and_links.toLowerCase().includes(search.toLowerCase()))
      ||
      post.title.toLowerCase().includes(search.toLowerCase()
      ))
  }

  return (
    <div className={classes.root} >
      {title && (
        <Banner
          title={podTitle}
          desktopImage={title.Image[0].url}
          searchbar={searchbar}
          description={description}
        />
      )}
      <div className={classes.mainContainer} >
        <div className={classes.headingContainer} >
          <div style={{ alignSelf: 'flex-start' }} className={classes.featuredHeading} >{search == '' ? 'Featured Podcast' : ''} </div>
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
                    <div className={classes.blogBody}>

                      <div className={classes.innderBody} >
                        <ReactMarkdown className={classes.mardown} source={truncateStr(post.notes_and_links, 550)} />
                        <br></br>
                        <Link className={classes.linkCnt} to={`/podcast-post/${post.id}/`}>
                          <h3 className={classes.detailLink}  >Play Episode</h3>
                        </Link>
                      </div>

                      <div className={classes.authorContainer} >
                        <AuthorCard title='Featuring' />

                        {post.guests.map((item, index) =>
                          <div key={index} className={classes.featuringRoot}>
                            <Link className={classes.container} to='/about' >
                              <div className={classes.imageCnt} >
                                <img
                                  src={`http://api.stressfreegut.com${item.avatar.url}`}
                                  className={classes.image}
                                />
                              </div>
                              <div>
                                <div className={classes.name} >
                                  {item.name}
                                </div>
                                <p className={classes.bio} >
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </div>
                        )}
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
                        ({tag.podcasts.length})
                      </span>
                    </p>
                  </Link>
                )
              )}
            </div>
            <div className={classes.sidebarContainer2} >
              <h5 style={{ fontSize: '1.3em', marginBottom: '5%' }} >Read This:</h5>
              {latest !== null ? (
                latest.map((item, index) =>
                  item.Recommended_Read.featured == true && (
                    <div key={index} style={{ margin: '3% 0% 3% 0%' }} >
                      <Link to={`/library`} >
                        <img
                          style={{ width: 200, height: 'auto', cursor: 'pointer' }}
                          src={`http://api.stressfreegut.com${item.Recommended_Read.image.url}`}
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
    </div>
  )
}

export default Podcasts