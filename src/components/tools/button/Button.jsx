import React from 'react'
import "./Button.css"

const Button = (props) => {
    const {title, style, click} = props;
  return (
    <button style={style} onClick={click}>{title}</button>
  )
}

export default Button