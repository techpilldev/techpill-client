import React, { useState, useEffect } from 'react'
import Title from '../../components/title/title.component.js'
import Banner from '../../components//banner/banner.component.js'

import MailchimpSubscribe from 'react-mailchimp-subscribe'

import { useStyles } from './contact.styles.js'

const Contact = () => {
  const classes = useStyles()
  const [data, setData] = useState(null)
  const titles = ["contact", "let's chat"]
  const [isEmailValid, setIsEmailVaild] = useState(null)
  const [float, setFloat] = useState(false)
  const url = "https://stressfreegut.us17.list-manage.com/subscribe/post?u=ef2f9a50e05d4ad9d7089ca2e&amp;id=157318a47f"
  const bannerTitle = (
    <Title
      color='white'
      title={titles[0]}
      subTitle={titles[1]}
    />)

  const description = `Please fill out the form below. We will get back to you as soon as we can!`

  const getData = async () => {
    const result = await fetch(`http://api.stressfreegut.com/legal`)
    const data = await result.json()
    console.log("data", data)
    setData(data)
  }

  const CustomForm = ({ status, message, onValidated }) => {
    let email
    const submit = () => {
      setIsEmailVaild(null)
      if (validateEmail(email) === true) {
        setIsEmailVaild(true)
        setFloat(true)
        onValidated({
          EMAIL: email.value,
        })
      } else {
        setIsEmailVaild(false)
      }
    }

    return (
      <div className={classes.formContainer} >
        <div style={{ height: '15' }} >
          {isEmailValid === false && (
            <div style={{ color: "red" }}>
              invalid email
            </div>
          )}
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && (
            <div style={{ color: "red" }}>
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
          <Banner
            title={bannerTitle}
            description={description}
            desColor='white'
          />
        </div>
      </div>
      <div className={classes.cardContainer} >
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
  )
}

export default Contact