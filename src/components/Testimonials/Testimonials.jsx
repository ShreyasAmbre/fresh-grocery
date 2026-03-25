import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Customer1 from '../../assets/customer1.jpg';
import Customer2 from '../../assets/customer2.jpg';
import Customer3 from '../../assets/customer3.jpg';
import Customer4 from '../../assets/customer4.jpg';
import Customer5 from '../../assets/customer5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaRegStar, FaStar } from 'react-icons/fa';

function Testimonials() {
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight="Customers" heading=" Testimonials" />

            <div className='flex justify-end gap-x-3 py-5'>
              <button className='custom-prev text-2xl text-zinc-800 rounded-lg w-10 h-10 flex justify-center items-center  bg-zinc-100
                hover:bg-gradient-to-b from-green-500 to-green-600 hover:text-white cursor-pointer '>
                <IoIosArrowBack />
              </button>
              <button className='custom-next text-2xl text-zinc-800 rounded-lg w-10 h-10 flex justify-center items-center  bg-zinc-100
              hover:bg-gradient-to-b from-green-500 to-green-600 hover:text-white cursor-pointer '>
                <IoIosArrowForward />
              </button>  
            </div>

            <Swiper 
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev"
              }} 
              loop={true}
              breakpoints={{
                640: {slidesPerView: 1, spaceBetween: 20},
                768: {slidesPerView: 2, spaceBetween: 20},
                1024: {slidesPerView: 3, spaceBetween: 20}
              }}
              modules={[Navigation]} className="mySwiper">
              {
                reviews.map(item => {
                  return(
                    <SwiperSlide className='bg-zinc-100 rounded-lg p-8' key={item.id}>
                      <div className='flex gap-5 items-center'>
                        <div className='flex items-center justify-center w-16 h-16 rounded-full outline-2 outline-green-500 outline-offset-4'>
                          <img src={item.image} alt="customer img" className='flex items-center justify-center rounded-full ' />
                        </div>
                        <div className='text-xl font-bold'>
                          <h5>{ item.name }</h5>
                          <p className='text-zinc-600'>{ item.profession }</p>
                          <span className="flex items-center gap-1 mt-2">
                            {Array.from({ length: 5 }, (_, index) =>
                              index < item.rating ? (
                                <FaStar key={index} className="text-yellow-400" />
                              ) : (
                                <FaRegStar key={index} className="text-gray-300" />
                              )
                            )}
                          </span>
                        </div>
                      </div>

                      <div className='mt-10 min-h-[15vh]'>
                        <p className='text-zinc-600'>
                          { item.review }
                        </p>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>

            


        </div>
        
        
      
    </section>
  )
}

export default Testimonials

const reviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    profession: 'Food Blogger',
    review: 'Fresh Grocery is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
    rating: 3,
    image: Customer1
  },
  {
    id: 2,
    name: 'David Smith',
    profession: 'Chef',
    review: 'As a chef, quality ingredients are everything. Fresh Grocery consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!',
    rating: 4,
    image: Customer2
  },
  {
    id: 3,
    name: 'Alya Zahra',
    profession: 'Model',
    review: "Shopping online with Fresh Grocery has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    rating: 5,
    image: Customer3
  },
  {
    id: 4,
    name: 'Carlos Mendes',
    profession: 'Fitness Coach',
    review: 'I appreciate the selection of healthy foods and clean-label products. Fresh Grocery has been a great partner in my wellness journey!',
    rating: 3,
    image: Customer4
  },
  {
    id: 5,
    name: 'Natcha Phongchai',
    profession: 'Nutritionist',
    review: 'Fresh Grocery offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
    rating: 4,
    image: Customer5
  }
]
