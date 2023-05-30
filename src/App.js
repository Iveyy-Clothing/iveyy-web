import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import Men from './components/Pages/Men';
import Story from './components/Pages/OurStory';
import Women from './components/Pages/Women';
// import Shop from './components/Shop';
// import Cart from './components/Cart';
// import Admin from './components/Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<Women />} /> 
        <Route path="/men" element={<Men />} />
        <Route path="/our-story" element={<Story />} /> 
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
