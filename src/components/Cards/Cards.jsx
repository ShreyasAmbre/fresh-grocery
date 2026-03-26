import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { useOutletContext } from "react-router-dom";

function Cards(props) {
  const { name, price, image, onSale, newArrival, oldPrice } = props.productDetails
  const { addToCart } = useOutletContext();


  const handleAddToCart = (product) => {
    addToCart(product);
  }

  return (
    <div className="bg-zinc-100 p-5 rounded-xl">
      <div className="flex justify-between">
        <span className="text-3xl text-zinc-300 cursor-pointer">
          <FaHeart />
        </span>
        { 
          newArrival && (
            <span className="bg-green-600 bg-gradient-to-b from-green-500 to-green-600 px-3 py-1 text-white rounded-lg">
              New Arrival
            </span>
          ) 
        }
        { 
          onSale && (
            <span className="bg-red-600 px-3 py-1 text-white rounded-lg">
              Sale
            </span>
          ) 
        }
        {/* <span>
          <button className="bg-green-600 bg-gradient-to-b from-green-500 to-green-600 text-xl p-2 rounded-lg cursor-pointer text-white">
            <FaPlus />
          </button>
        </span> */}
      </div>

      <div className="w-full h-50">
        <img src={ image } alt="product img" className="w-full h-full object-contain mx-auto" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl">{ name }</h3>
        <div className="flex gap-x-2 justify-center">
          {
            onSale && (
              <span className="text-2xl text-zinc-600 font-bold my-2 line-through">$ { oldPrice.toFixed(2) }</span>
            )
          }
          <span className="text-2xl font-bold my-2">$ { price.toFixed(2) }</span>
        </div>

        <Button content="Add to Cart" onClick={() => handleAddToCart(props.productDetails)} />
      </div>
    </div>
  );
}

export default Cards;
