import React from 'react';
import Strawberry from '../../assets/strawberry.png';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';

function Cart() {
  const { 
    activePanel, 
    togglePanel, 
    cart, 
    removeProductFromCart, 
    incrementQuantity, 
    decrementQuantity,  
    subtotal,
    shipping,
    handling,
    orderTotal, 
  } = useOutletContext();


  const renderCart = cart.map(product => {
    return (
      <div className='flex items-center gap-3 bg-white px-5 border-y-1 border-zinc-300' key={product.id}>
        <div className='w-20 h-20'>
          <img src={product.image} alt="product img" className='w-full h-full object-contain' />
        </div>

        <div className='flex-1'>
          <div className='flex justify-between'>
            <h4 className='font-semibold text-zinc-800 text-lg'>{ product.name }</h4>
            <button className='w-8 h-8 bg-red-600 rounded-full text-white flex justify-center items-center text-sm
              mr-[26px]
              cursor-pointer active:bg-red-800'
              onClick={() => removeProductFromCart(product)}>
              <FaTrash />
            </button>
          </div>
          <div className='flex justify-between'>
            <span>$ { product.price.toFixed(2) }</span>
            <div className='flex gap-2 pt-2'>
              <button className='w-7 h-7 bg-green-600 rounded-full text-white flex justify-center items-center text-sm
                cursor-pointer active:bg-green-800'
                onClick={() => decrementQuantity(product)}>
                <FaMinus />
              </button>
              <span>{ product.quantity }</span>
              <button className='w-7 h-7 bg-green-600 rounded-full text-white flex justify-center items-center text-sm
                cursor-pointer active:bg-green-800'
                onClick={() => incrementQuantity(product)}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  })

  

  return (
    <div className={`flex flex-col justify-between bg-zinc-100 fixed top-0 bottom-0 right-0 z-51 left-auto w-[400px] border-l border-zinc-300
      transform transition-transform duration-300
      ${activePanel === 'cart' ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className='px-10 bg-green-100'>
        <h3 className='text-3xl font-bold text-zinc-800 py-7 text-center'>Your Cart</h3>
      </div>

      {/* Cart Items */}
      {/* <div className='flex-1'>
        <div className='flex items-center gap-3 bg-white px-5 border-y-1 border-zinc-300'>
          <div className='w-20 h-20'>
            <img src={Strawberry} alt="product img" className='w-full h-full object-contain' />
          </div>

          <div className='flex-1'>
            <div className='flex justify-between'>
              <h4 className='font-semibold text-zinc-800 text-lg'>Red Fresh Strawberry</h4>
              <button className='w-8 h-8 bg-red-600 rounded-full text-white flex justify-center items-center text-sm
                mr-[26px]
                cursor-pointer active:bg-red-800'>
                <FaTrash />
              </button>
            </div>
            <div className='flex justify-between'>
              <span>$ 0.00</span>
              <div className='flex gap-2 pt-2'>
                <button className='w-7 h-7 bg-green-600 rounded-full text-white flex justify-center items-center text-sm
                  cursor-pointer active:bg-green-800'>
                  <FaMinus />
                </button>
                <span>1</span>
                <button className='w-7 h-7 bg-green-600 rounded-full text-white flex justify-center items-center text-sm
                  cursor-pointer active:bg-green-800'>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='flex-1 overflow-y-auto'>
        { renderCart }
      </div>

      {/* Cart Total */}
      <div className='px-10'>

        <div className='flex flex-col gap-y-2 flex-1 border-y border-zinc-300 py-2'>
          <div className='flex justify-between'>
            <span className='text-zinc-800 '>Subtotal</span>
            <span className='text-zinc-800 '>$ { subtotal }</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-zinc-800 '>Shipping & Handling</span>
            <span className='text-zinc-800 '>$ { shipping + handling}</span>
          </div>
          <div className='flex justify-between border-t  border-zinc-300 pt-2'>
            <span className='text-lg text-green-600 font-bold'>Order Total</span>
            <span className='text-lg text-green-600 font-bold'>$ {orderTotal}</span>
          </div>
        </div>


        <div className='flex gap-x-5 py-5'>
          <button className='bg-green-600 text-white rounded-lg flex-1 h-[7vh]
            cursor-pointer active:bg-green-800'
            onClick={() => togglePanel(null)}>
            Close 
          </button>
          
          <button className={`text-white rounded-lg flex-1 h-[7vh]
            active:bg-green-800
            ${cart.length === 0 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-green-600 hover:bg-green-700 cursor-pointer "}
            `}>
            Checkout
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default Cart
