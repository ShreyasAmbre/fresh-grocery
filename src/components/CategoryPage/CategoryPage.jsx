import React from 'react'
import Banner from '../Banner/Banner';
import ProductList from '../ProductList/ProductList';
import Cards from '../Cards/Cards';
import Heading from '../Heading/Heading';

function CategoryPage(props) {
  const categories = props.categories
  const filteredProducts = ProductList.filter(item => categories.includes(item.category));

  const renderCategoryProduct = filteredProducts.map(product => {
    return(
      <Cards productName={product.name} productPrice={product.price} productImg={product.image} key={product.id} />
    )
  }) 
  return (
    <div>
      <Banner title={props.title} bgImg={props.bgImg} />
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        {/* <Heading highlight="All" heading=" Products" /> */}

        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-10'>
          { renderCategoryProduct }
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
