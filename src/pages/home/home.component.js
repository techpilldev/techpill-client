import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AuthorCard from '../../components/author/author.component'

import Title from '../../components/title/title.component.js'
import Banner from '../../components/banner/banner.component.js'
import { robotDestop, robotMobile } from '../../assets/svgs.js'
import Searchbar from '../../components/searchbar/searchbar.component.js'
import ReactMarkdown from 'react-markdown'
import { useStyles } from './home.styles.js'

const Home = () => {
  const classes = useStyles()
  const titles = ["THE TECH PILL", "TECHNOLOGICAL EDUCATION"]
  const [data, setData] = useState(null)
  const [tags, setTags] = useState(null)
  const [latest, setLatest] = useState(null)
  const [search, setSearch] = useState('')
  const bannerTitle = (
    <Title
      color='black'
      title={titles[0]}
      subTitle={titles[1]}
    />)

  const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`

  const getData = async () => {
    let blogResult = await fetch(`http://api.thetechpill.com/blog-posts`)
    let blogData = await blogResult.json()

    let podcastResult = await fetch(`http://api.thetechpill.com/podcasts`)
    let podcastData = await podcastResult.json()

    const newArr = [...podcastData, ...blogData]

    setData(newArr)

    let tagRes = await fetch(`http://api.thetechpill.com/tags`)
    let tagData = await tagRes.json()
    setTags(tagData)
    let latRes = await fetch(`http://api.thetechpill.com/latest-releases`)
    let letData = await latRes.json()
    setLatest(letData)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

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

  return (
    <div className={classes.root} >
      <Banner
        title={bannerTitle}
        description={description}
        mobileImage={robotMobile}
        desktopImage={robotDestop}
      />
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
                    src={`http://api.thetechpill.com${post.cover_image.url}`}
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
                        ({tag.blog_posts.length})
                      </span>
                    </p>
                  </Link>
                )
              )}
            </div>
            <div className={classes.sidebarContainer2} >
              <h5 style={{ fontSize: '1.3em', marginBottom: '5%' }} >Latest release</h5>
              {latest !== null ? (
                latest.map((item, index) =>
                  <div key={index} >
                    <Link to={`/latest-releases`} >
                      <img
                        style={{ width: 200, height: 'auto', cursor: 'pointer' }}
                        src={`http://api.thetechpill.com${item.latest.cover_image.url}`}
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

export default Home
