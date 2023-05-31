import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


// Your image URLs
const images = [
    { src: 'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-shoes-bags/subhome-xmedia-22//w/1860/IMAGE-portrait-ipad-default-fill-1b4b757c-4ce3-4999-b2d9-f2fc9465a45d-default_0.jpg?ts=1685102404051', alt: 'Description of image 1', to: '/home' },
    { src: 'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-22//w/1860/IMAGE-portrait-ipad-fill-eafbd7b3-5a99-427c-af52-66f654c42ae4-default_0.jpg?ts=1685103177529', alt: 'Description of image 2', to: '/about' },
    { src: 'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-massimo-dutti/subhome-xmedia-21-2//w/1860/IMAGE-portrait-ipad-fill-bfd73c20-7b1d-4f73-b0a7-049959a8f79e-default_0.jpg?ts=1685013526854', alt: 'Description of image 3', to: '/contact' },
    // Add more images as needed
  ];

  
  const ImageCard = ({ image, alt, text, to }) => {
    return (
      <div className="relative h-screen w-full">
        <img src={image} alt={alt} className="w-full h-full object-cover object-top"/>
        <Link 
          to={to} 
          className="absolute bottom-10 right-0 bg-black bg-opacity-50 px-2 py-1 text-sm font-normal text-white"
          style={{fontFamily: 'Helvetica Neue'}}>
          {text}
        </Link>
        <div className="absolute top-0 left-0 w-full">
          <Navigation />
        </div>
      </div>
    );
  };

  export default function Slideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      }, 4000);
      return () => clearTimeout(timer);
    }, [currentImageIndex]);
  
    const currentImage = images[currentImageIndex];
  
    return (
      <div className="flex flex-wrap">
        <ImageCard
          key={currentImageIndex}
          image={currentImage.src}
          alt={currentImage.alt}
          text={currentImage.alt}
          to={currentImage.to}
        />
      </div>
    );
  }
  
