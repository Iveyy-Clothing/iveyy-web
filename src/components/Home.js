import React from 'react';
import SlideShow from './Slideshow';  // Import SlideShow component
import ShopCategory from './ShopCategory';
import Footer from './Footer';
import HomePageProducts from './HomePageProducts';


const HomePage = () => {
  return (
    <div>
        <SlideShow />
        <ShopCategory />
        <HomePageProducts />
        <Footer />
    </div>
  );
}

export default HomePage;
