import React, { useState } from 'react';
import './scss/style.scss';
import { About, Contact, Home, Legal, Product, Products } from './pages';
import { Header, Footer } from './components';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {


  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:id" element={<Products />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/legal" element={<Legal />}></Route>
          <Route path="/about" element={<About />}></Route>

        </Routes>
     {/*    <Footer /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
