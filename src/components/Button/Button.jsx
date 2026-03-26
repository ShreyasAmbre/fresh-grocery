import React from 'react'

function Button(props) {
  return (
    <button className='bg-green-600 bg-gradient-to-b from-green-500 to-green-600 text-white px-8 py-3 rounded-lg 
      md:text-lg text-md 
      hover:scale-105
      hover:from-green-600 transition-all duration-300 cursor-pointer'
      onClick={props.onClick}>
      { props.content }
    </button>
  )
}

export default Button
