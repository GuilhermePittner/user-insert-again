import React from 'react'

const Button = (props) => {
  return (
    <button className="rounded-full bg-[#8B8AE1] h-10 font-bold outline-none border-0" type={props.type} onClick={props.onClick}> {props.text} </button>
  )
}

export default Button
