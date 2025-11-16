import React from 'react'

const Banner = ({title , bgimg}) => {
  return (
    <div className='bg-center bg-cover h-[50vh] mt-20 flex justify-center items-center relative'
     style={{backgroundImage: `url(${bgimg})`}}>
        <h2 className='text-shadow-zinc-800 px-7 py-4 rounded-xl z-10 font-bold bg-white'>{title}</h2>
        <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner