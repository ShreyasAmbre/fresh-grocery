import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Note: If you use a dependency array, React already behaves like distinctUntilChanged.
  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500)
    return ()=>clearTimeout(delay)
  }, [searchTerm])

  const handleScroll = () => {
    const section = document.getElementById('product-section');
    if(section){
      section.scrollIntoView({behavior: "smooth"})
    }
  }
  return (
    <div>
      <Navbar 
        handleScroll={handleScroll} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      <Outlet context={{ searchTerm: debouncedSearch }} />
      <Footer />
    </div>
  )
}

export default Layout
