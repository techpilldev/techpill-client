import React, { useState, useEffect } from 'react'
import Title from '../../components/title/title.component.js'
import Banner from '../../components/banner/banner.component.js'

import MailchimpSubscribe from 'react-mailchimp-subscribe'
import FloatingText from '../../components/floating-text/floating-text.component'

import { useStyles } from './free-guide.styles.js'

const FreeGuide = () => {
  const classes = useStyles()
  const [data, setData] = useState(null)
  const [isEmailValid, setIsEmailVaild] = useState(null)
  const [float, setFloat] = useState(false)
  const url = "https://stressfreegut.us17.list-manage.com/subscribe/post?u=ef2f9a50e05d4ad9d7089ca2e&amp;id=157318a47f"


  const getData = async () => {
    const result = await fetch(`http://api.stressfreegut.com/free-guide-page`)
    const data = await result.json()
    setData(data)
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
  }

  let title = null;
  if (data !== null) {
    title = (
      <Title
        color='white'
        title={data.Title}
        subTitle={data.Subtitle}
      />)
  }

  const CustomForm = ({ status, message, onValidated }) => {
    let email
    let name
    const submit = () => {
      setIsEmailVaild(null)
      if (validateEmail(email) === true) {
        setIsEmailVaild(true)
        setFloat(true)
        onValidated({
          EMAIL: email.value,
          FNAME: name.value
        })
      } else {
        setIsEmailVaild(false)
      }
    }

    return (
      <div className={classes.formContainer} >
        <div style={{ height: '15' }} >
          {isEmailValid === false && (
            <div style={{ color: "red", fontFamily: 'Roboto' }}>
              invalid email
            </div>
          )}
          {status === "sending" && <div style={{ color: "blue", fontFamily: 'Roboto' }}>sending...</div>}
          {status === "error" && (
            <div style={{ color: "red", fontFamily: 'Roboto' }}>
              invalid email are you already subscribed?
            </div>
          )}
          {status === "success" && (
            <div>
              {float && (
                <FloatingText
                  setFloat={setFloat}
                  text={'Success!'}
                />
              )}
            </div>
          )}
        </div>
        <input
          className={classes.subscribeForm}
          ref={node => (name = node)}
          type="text"
          placeholder="Your name"
        />
        <input
          className={classes.subscribeForm}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button
          className={classes.formSubmitButton}
          onClick={submit}>
          Subscribe
        </button>
      </div>
    );
  };


  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root} >
      <div className={classes.bannerContainer}>
        <div className={classes.innerBanner} >
          {data !== null && (
            <Banner
              title={title}
              description={data.Description}
              desColor='white'
            />
          )}
        </div>
      </div>
      <div className={classes.cardContainer} >
        <div className={classes.aboutCard} >
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default FreeGuide