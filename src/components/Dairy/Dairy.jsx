import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage';
import BgDairy from '../../assets/dairy-banner.jpg';

function Dairy() {
  return (
    <div>
      <CategoryPage title="Dairy Products" bgImg={BgDairy} categories={['Dairy']} />
    </div>
  )
}

export default Dairy
