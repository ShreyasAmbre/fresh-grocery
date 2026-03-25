import React from 'react'
import Heading from '../Heading/Heading';
import FruitVegCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import NonVegCat from "../../assets/meat-and-seafood.png";
import Button from '../Button/Button';


function Category() {
  const renderCards = category.map(card => {
    return (
      <div className='flex-1 basis-[300px]' key={card.id}>
        <div className='w-full min-h-[30vh] relative -mb-10'>
          <img src={card.image} alt="category img" className='absolute bottom-0' />
        </div>

        <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
          <h3 className='text-zinc-800 text-3xl font-bold'>{ card.title }</h3>
          <p className='text-zinc-600 mt-3 mb-9'>{ card.description }</p>
          <Button content="See All" />
        </div>
      </div>
    )
  })
  return (
    <section className='max-w-[1400px] mx-auto px-10'>
      <div className='py-20'>
        <Heading highlight="Shop" heading=" by Category" />

        <div className='md:flex gap-10 md:mt-15'>
          { renderCards }
        </div>
      </div>
      
    </section>
  )
}

export default Category

const category = [
  {
    id: 1,
    title: 'Fruits & Veggies',
    description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
    image: FruitVegCat
  },
  {
    id: 2,
    title: 'Dairy & Eggs',
    description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
    image: DairyCat
  },
  {
    id: 3,
    title: 'Meat & SeaFood',
    description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
    image: NonVegCat
  }
]
