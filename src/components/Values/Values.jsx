import React from 'react'
import Heading from '../Heading/Heading';
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import VeggieBasketImg from '../../assets/basket-full-vegetables.png'

function Values() {
  const leftValues = values.slice(0,2).map(value => {
    return (
      <div className='flex flex-1 md:flex-row-reverse items-center gap-7' key={value.id}>
        <div>
          <span className='flex justify-center items-center bg-gradient-to-b from-green-500 to-green-600 
            text-white text-3xl w-15 h-15 rounded-full'>
            { value.icon }
          </span>
        </div>
        <div className='md:text-right'>
          <h3 className='text-zinc-800 text-3xl font-bold'>{ value.title }</h3>
          <p className='text-zinc-300 mt-2'>{ value.description }</p>
        </div>
      </div>
    )
  });

  const rightValues = values.slice(2).map(value => {
    return (
      <div className='flex flex-1 items-center gap-7' key={value.id}>
        <div>
          <span className='flex justify-center items-center bg-gradient-to-b from-green-500 to-green-600 
            text-white text-3xl w-15 h-15 rounded-full'>{ value.icon }</span>
        </div>
        <div>
          <h3 className='text-zinc-800 text-3xl font-bold'>{ value.title }</h3>
          <p className='text-zinc-300 mt-2'>{ value.description }</p>
        </div>
      </div>
    )
  })
  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="Our" heading=" Values" />

        <div className='flex md:flex-row flex-col md:gap-5 gap-15 mt-15'>
          <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
            { leftValues }
          </div>

          <div className='md:flex w-1/2 hidden'>
            <img src={VeggieBasketImg} alt="value img" />
          </div>
          
          <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
            { rightValues }
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Values

const values = [
  {
    id: 1,
    title: 'Trust',
    description: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaHeart />
  },
  {
    id: 2,
    title: 'Always Fresh',
    description: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaLeaf />
  },
  {
    id: 3,
    title: 'Food Safety',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <FaShieldAlt />
  },
  {
    id: 4,
    title: '100% Organic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: <FaSeedling />
  },
]
