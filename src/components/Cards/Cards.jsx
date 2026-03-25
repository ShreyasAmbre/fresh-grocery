import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

function Cards(props) {
  const { productName, productPrice, productImg } = props
  return (
    <div className="bg-zinc-100 p-5 rounded-xl">
      <div className="flex justify-between">
        <span className="text-3xl text-zinc-300 cursor-pointer">
          <FaHeart />
        </span>
        <span>
          <button className="bg-green-600 bg-gradient-to-b from-green-500 to-green-600 text-xl p-2 rounded-lg cursor-pointer text-white">
            <FaPlus />
          </button>
        </span>
      </div>

      <div className="w-full h-50">
        <img src={ productImg } alt="product img" className="w-full h-full object-contain mx-auto" />
      </div>

      <div className="text-center">
        <h3 className="text-2xl">{ productName }</h3>
        <p className="text-2xl font-bold my-2">$ { productPrice.toFixed(2) }</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
}

export default Cards;
