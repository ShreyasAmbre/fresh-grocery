import React from "react";
import Strawberry from '../../assets/strawberry.png';
import { useOutletContext } from "react-router-dom";

function Wishlist() {
  const { 
    activePanel, 
    togglePanel, 
    wishlist,
    addToCart,
    clearWishlist
   } = useOutletContext();
  
  const renderWishlist = wishlist.map(product => {
    return (
      <div className="flex items-center gap-3 bg-white px-5 border-y-1 border-zinc-300" key={product.id}>
        <div className="w-20 h-20">
          <img
            src={product.image}
            alt="product img"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between">
            <h4 className="font-semibold text-zinc-800 text-lg">
              { product.name }
            </h4>
            
          </div>
          <div className="flex justify-between items-center mb-3">
            <span>$ { product.price }</span>
            <button className="bg-green-600 text-white text-sm px-5 py-[7px] rounded-full
              cursor-pointer active:bg-green-800"
              onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className={`flex flex-col justify-between bg-zinc-100 fixed top-0 bottom-0 right-0 z-51 left-auto w-[400px] border-l border-zinc-300
      transform transition-transform duration-300
      ${activePanel === 'wishlist' ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="px-10 bg-green-100">
        <h3 className="text-3xl font-bold text-zinc-800 py-7 text-center">
          Your Wishlist
        </h3>
      </div>

      {/* Cart Items */}
      <div className="flex-1">
        { renderWishlist }
      </div>


      <div className='px-10'>

        <div className='flex gap-x-5 py-5'>
          <button className='bg-green-600 text-white rounded-lg flex-1 h-[7vh]
            cursor-pointer active:bg-green-800'
            onClick={() => togglePanel(null)}>
            Close
          </button>
          <button className='bg-green-600 text-white rounded-lg flex-1 h-[7vh]
            cursor-pointer active:bg-green-800'
            onClick={clearWishlist}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
