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
    const result = await fetch(`http://api.stressfreegut.com/podcasts/${postID}`)
    const data = await result.json()
    setData(data)
    let res = await fetch(`http://api.stressfreegut.com/recommended-reads`)
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
              src={`http://api.stressfreegut.com${data.cover_image.url}`} />
            <div className={classes.blogCard} >
              <ShareButtons pageUrl={'https://www.hellobruce.co.uk/'} />
              <p className={classes.blogDate} >{formatDate(data.created_at)}</p>
              <h3 className={classes.blogHeading} >{data.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'center' }} >
                <audio style={{ width: '70%' }} controls src={`http://api.stressfreegut.com${data.audio.url}`} />
              </div>
              <hr className={classes.blogHr} />
              <div className={classes.blogBody}>
                <ReactMarkdown className={classes.mardown} source={data.notes_and_links} />
              </div>
              <div className={classes.blogAuthor} > - {data.author}</div>
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
              <div className={classes.mardownContainer} >
                <ReactMarkdown
                  className={classes.mardown}
                  escapeHtml={false}
                  source={data.notes_and_links}
                />
              </div>
              <h3 className={classes.recommendedHeading} >Recommended Reads</h3>
              <div className={classes.recOuterContainer} >
                {reads &&
                  reads.map((item, index) =>
                    item.Recommended_Read.featured == true && (
                      <div key={index} className={classes.recommendedContainer} >
                        <img
                          className={classes.recommendedImage}
                          src={`http://api.stressfreegut.com${item.Recommended_Read.image.url}`} />
                        <div
                          className={classes.recommendedImageContainer}  >
                          <p
                            className={classes.recommendedTitle} >{item.Recommended_Read.title}</p>
                          <p
                            className={classes.link}
                            onClick={() => {
                              window.open(item.Recommended_Read.link, '_blank')
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