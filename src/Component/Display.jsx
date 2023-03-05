import React from 'react'
import './Display.css'

const Display = (props) => {
  return (
    <div className='Display'>
        <h3 style={{color:"orange"}}>{props.display}</h3>
        <p>{props.value}</p>
    </div>
  )
}

export default Display