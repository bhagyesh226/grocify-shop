import React from 'react'

const Heading = (props) => {
  return (
    <div className='md:py-15 py-2'>
        <div className='mx-auto w-fit '>
          <h2 className='md:text-5xl text-zinc-800 text-2xl font-bold'>
            <samp className='text-orange-500'>{props.heading}</samp> {props.heading2}
          </h2>
          
          <div className='md:w-35 w-20 md:mt-6 mt-3 md:h-1 h-0.5 bg-orange-400 self-end ml-auto'></div>
        </div>

      </div>
  )
}

export default Heading