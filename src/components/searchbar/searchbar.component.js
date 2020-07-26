import React from 'react'

import { useStyles } from './searchbar.styles'

const Searchbar = (props) => {
  console.log("Serchbar")
  const { handleChange, placeholder } = props
  const classes = useStyles()
  const {
    searchbar,
    searchbar_input
  } = classes

  return (
    <div className={searchbar} >
      <input
        className={searchbar_input}
        type='text'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export default Searchbar