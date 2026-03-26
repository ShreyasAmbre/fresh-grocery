import React from 'react'
import ProductList from '../ProductList/ProductList';
import BgAll from '../../assets/all-banner.jpg';
import Cards from '../Cards/Cards';
import Heading from '../Heading/Heading';
import Banner from '../Banner/Banner';

function AllProducts() {

  const renderCategoryProduct = ProductList.map(product => {
    return(
      <Cards 
        key={product.id}
        productDetails={product}
      />
    )
  }) 
  return (
    <div>
      <Banner title="All Products" bgImg={BgAll} />
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        {/* <Heading highlight="All" heading=" Products" /> */}

        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-10'>
          { renderCategoryProduct }
        </div>
      </div>
    </div>
  )
}

export default AllProducts
