import React from 'react'

import { useStyles } from './searchbar.styles'

const Searchbar = (props) => {
  console.log("Serchbar")
  // const { description } = props
  const classes = useStyles()
  const {
    searchbar,
    searchbar_input
  } = classes

  return (
    <div className={searchbar} >
      <input className={searchbar_input} type='text' placeholder={'article, guest, tag ...'} />
    </div>
  )
}

export default Searchbar