import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

function Navbar(props) {

  const [isShowMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 

  const toggleShowMobileMenu = () => {
    setShowMobileMenu(!isShowMobileMenu)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-lg' : '' } `}>
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex items-center justify-between">
        <Link to="/" className="md:text-3xl text-2xl font-bold text-zinc-800">
          <span className="text-green-600">Fresh</span> Grocery
        </Link>

        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <Link to="/" className="font-semibold tracking-wider text-green-600">
              Home
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-600"
            >
              Process
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-600"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-x-5 ">
          <div className="md:flex p-1 border-2 border-green-600 rounded-full hidden">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
              onFocus={props.handleScroll}
              onChange={(e) => props.setSearchTerm(e.target.value)}
            />
            <button className="bg-green-600 bg-gradient-to-b from-green-500 to-green-600 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </div>
          <button className="text-zinc-800 text-2xl cursor-pointer"
            onClick={() => props.togglePanel('wishlist')}>
            <GoHeartFill className="text-red-500" />
          </button>
          <button className="text-zinc-800 text-2xl cursor-pointer"
            onClick={() => props.togglePanel('cart')}>
            <HiMiniShoppingBag className="text-amber-800" />
          </button>
          <a href="#" className="text-zinc-800 text-2xl md:hidden" onClick={toggleShowMobileMenu}>
            {
              isShowMobileMenu ? 
              <TbMenu3 /> :
              <RiMenu2Line />
            }
          </a>


          {/* Mobile Menu */}
          <ul className={`flex flex-col gap-y-8 bg-green-500/15 backdrop-blur-xl rounded-xl p-10 items-center gap-x-15 
              md:hidden absolute top-30  transform -translate-x-1/2 transition-all duration-500 
              shadow-xl
              ${isShowMobileMenu ? 'left-1/2' : '-left-full'}`
            }>
            <li>
              <Link to="/" className="font-semibold tracking-wider text-green-600">
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-green-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-green-600"
              >
                Process
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-semibold tracking-wider text-zinc-800 hover:text-green-600"
              >
                Contact
              </Link>
            </li>
            <li className="flex p-1 border-2 border-green-600 rounded-full md:hidden">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search..."
                autoComplete="off"
                className="flex-1 h-[5vh] px-3 focus:outline-none"
                onFocus={props.handleScroll}
                onChange={(e) => props.setSearchTerm(e.target.value)}
              />
              <button className="bg-green-600 bg-gradient-to-b from-green-500 to-green-600 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                <IoSearch />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
