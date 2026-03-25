import React from 'react'
import Banner from '../Banner/Banner';
import CategoryPage from '../CategoryPage/CategoryPage';
import BgSeaFood from '../../assets/seafood-banner.jpg';

function SeeFood() {
  return (
    <div>
      <CategoryPage title="Meat & See Foods" bgImg={BgSeaFood} categories={['SeaFood']} />
    </div>
  )
}

export default SeeFood
