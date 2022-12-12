import React from 'react'

export default function Square(props) {
  return (
    <button className={props.value?"btn disable":"btn"} onClick={props.onClick}>
      {props.value}
    </button>
  )
}
