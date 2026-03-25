import React from 'react'
import Home from './components/Home/Home';
import { createBrowserRouter, HashRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits';
import Dairy from './components/Dairy/Dairy';
import SeeFood from './components/SeeFood/SeeFood';
import AllProducts from './components/AllProducts/AllProducts';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact';
// Server Side Routing
export default function App() {
  const router = createBrowserRouter([
    { 
      path: '/', 
      element: <Layout />, 
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/fruits',
          element: <Fruits />
        },
        {
          path: '/dairy',
          element: <Dairy />
        },
        {
          path: '/seafood',
          element: <SeeFood />
        },
        {
          path: '/all-products',
          element: <AllProducts />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }, 
    
  ])
  return <RouterProvider router={router} />
}

// Static Routing
// export default function App() {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Layout />} >
//           <Route index element={<Home />} />
//           <Route path="fruits" element={<Fruits />} />
//           <Route path="dairy" element={<Dairy />} />
//           <Route path="seafood" element={<SeeFood />} />
//           <Route path="all-products" element={<AllProducts />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </HashRouter>
//   )
// }
