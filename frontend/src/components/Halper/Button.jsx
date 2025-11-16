import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b from-orange-400 to-orange-500 cursor-pointer text-white px-8 py-3 text-lg rounded-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 '>
        {props.contant}
    </button>
  )
}

export default Button