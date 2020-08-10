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
  const [homeTitle, setHomeTitle] = useState(null)

  const getData = async () => {
    let homeResult = await fetch(`http://api.stressfreegut.com/home-page`)
    let homeData = await homeResult.json()
    setHomeTitle(homeData)

    let blogResult = await fetch(`http://api.stressfreegut.com/blog-posts`)
    let blogData = await blogResult.json()

    let podcastResult = await fetch(`http://api.stressfreegut.com/podcasts`)
    let podcastData = await podcastResult.json()

    const newArr = [...podcastData, ...blogData]

    newArr.sort((x, y) => {
      return new Date(y.created_at) - new Date(x.created_at)
    })

    setData(newArr)

    let tagRes = await fetch(`http://api.stressfreegut.com/tags`)
    let tagData = await tagRes.json()
    setTags(tagData)
    let latRes = await fetch(`http://api.stressfreegut.com/recommended-reads`)
    let letData = await latRes.json()
    console.log(letData[0].Recommended_Read.featured)
    setLatest(letData)
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
      />)
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
          desktopImage={robotDestop}
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
                  <img
                    className={classes.smallImg}
                    src={`http://api.stressfreegut.com${post.cover_image.url}`}
                  />
                  <div style={{ padding: '2%' }} >
                    <h3 className={classes.smallHeading} >{post.title}</h3>
                    <p className={classes.smallDate} >{formatDate(post.created_at)}</p>
                    <ReactMarkdown
                      className={classes.markdown}
                      source={post.body ?
                        (truncateStr(post.body, 300)) : truncateStr(post.notes_and_links, 300)} />
                    {post.body ? (
                      <Link to={`/blog-posts/${post.id}/`}>
                        <h3 style={{ color: '#2DC4EE' }}>{'Continue reading'}</h3>
                      </Link>
                    ) : (
                        <Link to={`/podcast-post/${post.id}/`}>
                          <h3 style={{ color: '#2DC4EE' }}>{'Listen to episode'}</h3>
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
                <div style={{ fontSize: '1.5em' }} >About Niels Pederson</div>
                <Link className={classes.container} to='/about' >
                  <div className={classes.imageCnt} >
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C5603AQEk1DPCbPv6yQ/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=z2ENDBsAhjeW87LAYkrOa1B-V4MomNifW2_K9z5B7L4"
                      className={classes.image}
                    />
                  </div>
                  <div>
                    <div className={classes.name} >
                      Niels Pederson
                    </div>
                    <p className={classes.bio} >
                      Business-to-consumer value proposition innovator partnership technology client beta.
                    </p>
                  </div>
                </Link>
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
                  )


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

export default Home
