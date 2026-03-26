import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [activePanel, setActivePanel] = useState(null);
  const [cart, setCart] = useState([]);
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shipping = subtotal > 0 ? 50 : 0;
  const handling = subtotal > 0 ? 20 : 0;

  const orderTotal = subtotal + shipping + handling;

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

  const togglePanel = (tabName) => {
    setActivePanel(prev => (
      prev !== tabName ? tabName : null 
    ))
  }

  const addToCart = (product) => {
    console.log(product);
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);

      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  const removeProductFromCart = (product) => {
    setCart(prevCart => prevCart.filter(item => item.id !== product.id));
  }

  const incrementQuantity = (product) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (product) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Navbar 
        handleScroll={handleScroll} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        togglePanel={togglePanel}
        cartCount={cartCount}
      />
      <Outlet context={
        { 
          searchTerm: debouncedSearch, 
          activePanel: activePanel, 
          togglePanel: togglePanel,
          addToCart: addToCart,
          removeProductFromCart: removeProductFromCart,
          incrementQuantity: incrementQuantity,
          decrementQuantity: decrementQuantity, 
          cart: cart,
          subtotal: subtotal,
          shipping: shipping,
          handling: handling,
          orderTotal: orderTotal
        }
      }/>
      <Footer />
    </div>
  )
}

export default Layout
