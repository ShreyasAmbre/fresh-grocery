import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

function Hero() {
  return (
    <section>
      <div className="min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center pt-25">
        <div className="flex-1">
          <span className="bg-green-100 text-green-600 text-lg px-5 py-2 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/20 text-4xl/12 font-bold mt-4">
            Tasty Organic
            <span className="text-green-500"> Fruits</span> &
            <span className="text-green-500"> Veggies </span>
            <br />
            In Your City
          </h1>
          <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-5">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button content="Shop Now" />
        </div>

        <div className="flex-1">
          <img src={Grocery} alt="Hero Img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
