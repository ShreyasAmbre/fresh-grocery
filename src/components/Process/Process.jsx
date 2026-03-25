import React from 'react'
import Heading from '../Heading/Heading';
import { FaAward, FaLeaf, FaTruck } from 'react-icons/fa';
import { MdFactory } from 'react-icons/md';

function Process() {
  const renderSteps = steps.map(item => {
    return(
      // <div className={`flex flex-col justify-center items-center gap-5 flex-1 ${item.id % 2 === 0 ? '-mt-50' : ''} `}>
      <div className={`flex-1 basis-[300px] mb-10 ${item.id % 2 === 0 ? 'md:-mt-50' : ''} `} key={item.id}>
        <div className='flex  justify-center md:mb-10 bg-red-400 w-fit md:mx-auto rounded-full outline-[3px] outline-offset-10 outline-zinc-800 outline-dashed'>
          <span className='flex items-center justify-center w-13 h-13  rounded-full bg-white text-zinc-800 text-4xl font-bold outline-[4px] outline-zinc-800 outline-solid' >{ item.number }</span>
        </div>
        
        <div className='flex items-center gap-3'>
          <span className='flex justify-center items-center bg-gradient-to-b from-green-500 to-green-600 text-white text-2xl
            md:w-16 md:h-15 w-16 h-13 rounded-full'>
            { item.processIcon }
          </span>

          <div>
            <h4 className='text-zinc-800 text-2xl font-bold'>{ item.title }</h4>
            <p className='text-zinc-600 mt-2'>{ item.description }</p>
          </div>
          
        </div>
      </div>
    )
  })
  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <div className='w-fit mr-auto'>
          <Heading highlight="Our" heading=" Process" />
        </div>

        <div className='flex flex-wrap items-center justify-center md:mt-20 mt-10 md:pt-25'>
          { renderSteps }
        </div>



      </div>
    </section>
  )
}

export default Process

const steps = [
  {
    id: 1,
    number: 1,
    processIcon: <FaLeaf />,
    title: 'Sourcing',
    description: 'It is a long established fact that a reader'
  },
  {
    id: 2,
    number: 2,
    processIcon: <MdFactory />,
    title: 'Manufacturing',
    description: 'It is a long established fact that a reader'
  },
  {
    id: 3,
    number: 3,
    processIcon: <FaAward />,
    title: 'Quality Control',
    description: 'It is a long established fact that a reader'
  },
  {
    id: 4,
    number: 4,
    processIcon: <FaTruck />,
    title: 'Logistics',
    description: 'It is a long established fact that a reader'
  },
]
