import React from 'react'

const Heading = (props) => {
  return (
    <div className='md:py-15 py-2'>
        <div className='mx-auto w-fit '>
          <h2 className='md:text-5xl text-zinc-800 text-3xl font-bold'>
            <samp className='text-orange-500'>{props.heading}</samp> {props.heading2}
          </h2>
          
          <div className='w-35 mt-6 h-1 bg-orange-400 self-end ml-auto'></div>
        </div>

      </div>
  )
}

export default Heading