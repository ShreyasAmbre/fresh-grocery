import React from 'react'

function Banner(props) {
  return (
    <div className='bg-zinc-400 h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative' 
      style={{backgroundImage: `url(${props.bgImg})`}}>
      <h2 className='text-5xl px-25 py-10 rounded-xl font-bold bg-green-200/15 backdrop-blur-xl text-white z-10'>
        { props.title }
      </h2>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner
