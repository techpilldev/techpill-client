import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Title from '../../components/title/title.component.js'
import Banner from '../../components/banner/banner.component.js'
import { robotDestop, robotMobile } from '../../assets/svgs.js'
import ReactMarkdown from 'react-markdown'
import { useStyles } from './home.styles.js'


const Home = () => {
  const classes = useStyles()
  const [data, setData] = useState(null)
  const [tags, setTags] = useState(null)
  const [latest, setLatest] = useState(null)
  const [about, setAbout] = useState(null)
  const [homeTitle, setHomeTitle] = useState(null)

  const getData = async () => {
    let homeResult = await fetch(`${process.env.API}/home-page`)
    let homeData = await homeResult.json()
    setHomeTitle(homeData)

    let blogResult = await fetch(`${process.env.API}/blog-posts`)
    let blogData = await blogResult.json()

    let podcastResult = await fetch(`${process.env.API}/podcasts`)
    let podcastData = await podcastResult.json()

    const newArr = [...podcastData, ...blogData]

    newArr.sort((x, y) => {
      return new Date(y.created_at) - new Date(x.created_at)
    })

    setData(newArr)

    let tagRes = await fetch(`${process.env.API}/tags`)
    let tagData = await tagRes.json()
    setTags(tagData)
    let latRes = await fetch(`${process.env.API}/recommended-reads`)
    let letData = await latRes.json()
    setLatest(letData)
    let abtRes = await fetch(`${process.env.API}/about-page`)
    let abtData = await abtRes.json()
    setAbout(abtData)
  }

  const formatDate = (date) => {
    const dateObj = new Date(date)
    const fmtDate = dateObj.toString().split("G")
    return fmtDate[0]
  }
  const truncateStr = (str, num) => {
    return str.slice(0, num) + '...'
  }

  let bannerTitle = null;
  if (homeTitle !== null) {
    bannerTitle = (
      <Title
        color='black'
        title={homeTitle.Title}
        subTitle={homeTitle.Subtitle}
      />
    )
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root} >
      {homeTitle && (
        <Banner
          title={bannerTitle}
          description={homeTitle.Description}
          mobileImage={robotMobile}
          desktopImage={homeTitle.image.url}
          desColor='#495057'
        />
      )}
      <div className={classes.mainContainer} >
        <div className={classes.headingContainer} >
          <div style={{ alignSelf: 'flex-start' }} className={classes.featuredHeading} >Latest Uploads </div>
        </div>
        <div className={classes.container2} >
          <div className={classes.smallCardContainer} >
            {data && (
              data.map((post, index) =>
                <div key={index} className={classes.smallCard} >
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
                    )
                  }
                  <div style={{ height: 'auto', padding: '2%' }} >
                    <h3 className={classes.smallHeading} >{post.title}</h3>
                    <p className={classes.smallDate} >{formatDate(post.created_at)}</p>
                    <ReactMarkdown
                      className={classes.markdown}
                      source={post.body ?
                        (truncateStr(post.body, 300)) : truncateStr(post.notes_and_links, 300)} />
                    {post.body ? (
                      <Link to={`/blog-posts/${post.id}/`}>
                        <h3 style={{ color: '#2DC4EE', margin: 0 }}>{'Continue reading'}</h3>
                      </Link>
                    ) : (
                        <Link to={`/podcast-post/${post.id}/`}>
                          <h3 style={{ color: '#2DC4EE', margin: 0 }}>{'Listen to episode'}</h3>
                        </Link>
                      )
                    }
                  </div>
                </div>
              )
            )}
          </div>
          <div className={classes.sidebar} >
            <div className={classes.sidebarContainer0} >
              <div className={classes.aboutRoot}>

                {about && (
                  <Link className={classes.container} to='/about' >
                    <div className={classes.imageCnt} >
                      <img
                        src={`${process.env.API}${about.image.url}`}
                        className={classes.image}
                      />
                    </div>
                    <div>
                      <div className={classes.name} >
                        {about.title}
                      </div>
                      <p className={classes.bio} >
                        {truncateStr(about.body, 50)}
                      </p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
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
                        ({tag.blog_posts.length + tag.podcasts.length})
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
    </div >
  )
}

export default Home
