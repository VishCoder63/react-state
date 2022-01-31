import React from 'react'


export function Button(props) {
  return (
    <>
      <button onClick={props.callback}>{props.text}</button>
    </>
  )
}

