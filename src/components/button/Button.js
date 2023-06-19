import React from 'react'
import "./Button.css"
const Button = ({text}) => {
  return (
    <div className='button-wrapper'>
      <button className="button">{text}</button>
    </div>
  )
}

export default Button
