import React from 'react'

function Heading(props) {
  return (
    <div>
      <div className='w-fit mx-auto'>
        <h2 className=' md:text-5xl text-[2.5rem] font-bold '>
          <span className='text-green-600'>{ props.highlight } </span> { props.heading }
        </h2>
        <div className='w-34 h-1 bg-green-300 md:mt-6 mt-3 ml-auto'></div>
      </div>
    </div>
  )
}

export default Heading
