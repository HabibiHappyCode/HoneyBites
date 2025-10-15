import './App.css'
import { useState } from 'react'
import "tailwindcss";
import Navbar from './navigations/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContextProvider } from './store/CartContext';
import Checkout from './checkout/Checkout';
import Footer from './footer/Footer'
import MoreMeals from './routes/more_meals/MoreMeals';


function App() {
  return (
    <>
      <CartContextProvider>
        {/* navigation */}
        <Navbar />


        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/more-meals' element={<MoreMeals/> } />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartContextProvider>

      {/* footer */}
     <Footer />
    </>
  )
}

export default App
