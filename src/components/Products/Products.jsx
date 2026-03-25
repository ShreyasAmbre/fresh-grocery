import React, { useState } from 'react'
import Heading from '../Heading/Heading';
import ProductList  from '../ProductList/ProductList'
import Cards from '../Cards/Cards';
import Button from '../Button/Button';

function Products() {
  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'See Foods'];
  const [activeTab, setActiveTab] = useState('All');

  let filteredItems = activeTab === 'All' ? ProductList : 
  ProductList.filter(item => item.category === activeTab);

  const renderCards = filteredItems.slice(0,8).map((product) => {
    return (
      <Cards productName={product.name} productPrice={product.price} productImg={product.image} key={product.id} />
    )
  })


  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10'>
        <Heading highlight="Our" heading=" Products" />

        <div className='flex flex-wrap gap-3 justify-center pt-10'>
          { 
            categories.map(item => {
              return (
                <button key={item} 
                  className={` px-5 py-2 text-lg rounded-lg cursor-pointer
                  ${activeTab === item ? 'bg-gradient-to-b from-green-500 to-green-600  text-white' : 'bg-zinc-100' }`}
                  onClick={() => setActiveTab(item)}>
                  {item}
                </button>
              )
            }) 
          }
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
          { renderCards }
        </div>

        <div className='w-full flex justify-center py-10'>
          <Button content="View All"/>
        </div>

      </div>
    </section>
  )
}

export default Products



