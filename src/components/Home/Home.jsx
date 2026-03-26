import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Process from "../Process/Process";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

function Home() {

  return (
    <div>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Cart />
      <Wishlist />
      <Discount />
      <Process />
      <Testimonials />
    </div>
  );
}

export default Home;
