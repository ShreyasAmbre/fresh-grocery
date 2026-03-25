import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-zinc-100 py-20'>
      <div className='flex flex-wrap gap-y-10 max-w-[1400px] mx-auto px-10'>
        <div className='flex-1 basis-[300px]'>
          <a href="#" className="md:text-3xl text-2xl font-bold text-zinc-800">
            <span className="text-green-600">Fresh</span> Grocery
          </a> 
          <p className='max-w-[350px] text-zinc-600 mt-6'>
            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
          </p> 
          <p className='text-zinc-800 mt-6'>
           2026 &copy; All Rights Reserved
          </p>  
        </div>

        <ul className='flex-1'>
          <li>
            <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
          </li>
          <li className='mt-6'>
            <a href="#" className='text-zinc-800 hover:text-green-600 '>About</a>
          </li>
          <li className='mt-6'>
            <a href="#" className='text-zinc-800 hover:text-green-600'>FAQ</a>
          </li>
        </ul>


        <ul className='flex-1'>
          <li>
            <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
          </li>
          <li className='mt-6'>
            <a href="#" className='text-zinc-800 hover:text-green-600 '>Support Center</a>
          </li>
          <li className='mt-6'>
            <a href="#" className='text-zinc-800 hover:text-green-600'>Feedback</a>
          </li>
          <li className='mt-6'>
            <a href="#" className='text-zinc-800 hover:text-green-600'>Contact Us</a>
          </li>
        </ul>


        <div className='flex-1 gap-10'>
          <h5 className='text-zinc-800 text-2xl font-bold'>
            Stay Connected
          </h5>
          <p className='mt-6 text-zinc-600'>
            Questions or Feedback ? <br />
            We'd love to hear from you.
          </p>
          <div className='flex bg-white p-1 rounded-lg mt-6 '>
            <input type="text" name='email' id='email' autoComplete='off' placeholder='Email Address' 
              className='h-[5vh] pl-4 flex-1 focus: outline-none'/>
            <button className='bg-gradient-to-b from-green-400 to-green-600 rounded-lg p-2 text-white text-2xl 
              hover:from-green-600 cursor-pointer '>
              <FaLocationArrow />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
