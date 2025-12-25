import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b text-lg from-orange-400 to-orange-600 cursor-pointer text-white md:px-8 px-3 md:py-3 py-1  rounded-lg hover:scale-105 hover:to-orange-700 transition-all duration-300 '>
        {props.contant}
    </button>
  )
}

export default Button