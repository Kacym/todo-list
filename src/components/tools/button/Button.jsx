import React from 'react'

const Button = (props) => {
    const {click, style, title} = props
  return (
    <button style={style} onClick={click} >{title}</button>
  )
}

export default Button