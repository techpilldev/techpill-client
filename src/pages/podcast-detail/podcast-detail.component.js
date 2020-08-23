import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import ShareButtons from '../../components/share-buttons/share-buttons.component'

import { useStyles } from './podcast-detail.styles'

const PodcastDetails = (props) => {
  const classes = useStyles()
  const { postID } = useParams()
  const [data, setData] = useState()
  const [reads, setReads] = useState(null)

  const getData = async (postID) => {
    const result = await fetch(`${process.env.API}/podcasts/${postID}`)
    const data = await result.json()
    console.log("author", data)

    setData(data)
    let res = await fetch(`${process.env.API}/recommended-reads`)
    let recReads = await res.json()
    setReads(recReads)
  }

  const formatDate = () => {
    const date = new Date(data.created_at)
    const fmtDate = date.toString().split("G")
    return fmtDate[0]
  }

  useEffect(() => {
    getData(postID)
  }, [])

  return (
    <div className={classes.mainContainer} >
      <div className={classes.outerContainer} >
        {data && (
          <div className={classes.blogCardContainer} >
            <img
              className={classes.blogImage}
              src={`${process.env.API}${data.cover_image.url}`} />
            <div className={classes.blogCard} >
              <ShareButtons pageUrl={`${process.env.API}/podcasts/${postID}`} />
              <p className={classes.blogDate} >{formatDate(data.created_at)}</p>
              <h3 className={classes.blogHeading} >{data.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'center' }} >
                <audio style={{ width: '70%' }} controls src={`${process.env.API}${data.audio.url}`} />
              </div>
              <hr className={classes.blogHr} />
              <h3 className={classes.tagsHeading} >Tags</h3>
              <div className={classes.linksContainer} >
                {data.tags.map((item, index) =>
                  <Link className={classes.link} key={index} to={`/tags/${item.name}/${item.id}/`} >
                    <p style={{ color: '#2DC4EE' }}>{item.name} </p>
                  </Link>)}
              </div>
              <br></br>
              <h3 className={classes.referenceHeading} >References</h3>
              <div className={classes.blogBody} >
                <ReactMarkdown
                  className={classes.mardown}
                  source={data.notes_and_links}
                />
                <div style={{ display: 'flex', flexDirection: 'row', margin: '0% 2% 0% 0%', alignItems: 'center' }} >
                  <span style={{ fontSize: '1.5em' }} >Share</span><ShareButtons pageUrl={`${process.env.API}/podcasts/${postID}`} />
                </div>
              </div>
              <h3 className={classes.recommendedHeading} >Recommended Reads</h3>
              <div className={classes.recOuterContainer} >
                {reads &&
                  reads.map((item, index) =>
                    item.featured == true && (
                      <div key={index} className={classes.recommendedContainer} >
                        <img
                          onClick={() => {
                            window.open(item.link, '_blank')
                          }}
                          className={classes.recommendedImage}
                          src={`${process.env.API}${item.image[0].url}`} />
                        <div
                          className={classes.recommendedImageContainer}  >
                          <p className={classes.recommendedTitle} >{item.title}</p>
                          <p
                            className={classes.link}
                            onClick={() => {
                              window.open(item.link, '_blank')
                            }}
                          >Read more
                        </p>
                        </div>
                      </div>
                    )

                  )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PodcastDetails