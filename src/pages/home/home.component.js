import React from 'react'

import Title from '../../components/title/title.component.js'

import { useStyles } from './home.styles.js'

const Home = () => {
  const classes = useStyles()
  const titles = ["TECH PILL", "TECHNOLOGICAL EDUCATION"]

  return(
    <div className={classes.root} >
      <div className={classes.banner} >
          <div className={classes.titleContainer} >
            <Title
              color='black'
              title={titles[0]}
              subTitle={titles[1]}
            />
          </div>
          <div className={classes.imageContainer}>
            IMAGE HERE
        </div>
          <div className={classes.descriptionContainer}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </div>
      </div>
    </div>
  )
}

export default Home