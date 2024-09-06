import React from 'react';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import Everything from './Pages/Everything';
import Groceries from './Pages/Groceries';
import { Routes , Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Juices from './Pages/Juices';
import SinglePage from './Pages/SinglePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage/>}></Route>
          <Route path="/everything" element={<Everything/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/product-category/:name" element={<Groceries/>}></Route>
          <Route path="/product-category/:name" element={<Juices/>}></Route>
          <Route path="/product-category/:category/:product_name" element={<SinglePage/>}></Route>
          {/* <Route path="/product-category/:name" element={<Itemspage/>}></Route>
          <Route path="/product-category/:category/:product_name" element={<Singlepage />}></Route> */}
        </Route>
      </Routes>
    </>
  )
}

export default App

// rem ke baare me bta diyo ok