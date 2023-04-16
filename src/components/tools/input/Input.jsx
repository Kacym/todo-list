import React from 'react'

const Input = (props) => {
    const {value, change} = props
  return (
    <input onChange={change} value={value} type="text" />
  )
}

export default Input