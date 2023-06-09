import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const media = [
  {
    type: 'image',
    src: 'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-shoes-bags/subhome-xmedia-22//w/1860/IMAGE-portrait-ipad-default-fill-1b4b757c-4ce3-4999-b2d9-f2fc9465a45d-default_0.jpg?ts=1685102404051',
    alt: 'Description of image 1',
    to: '/home'
  },
  {
    type: 'image',
    src: 'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-shoes-bags/subhome-xmedia-22//w/1860/IMAGE-portrait-ipad-default-fill-1b4b757c-4ce3-4999-b2d9-f2fc9465a45d-default_0.jpg?ts=1685102404051',
    alt: 'Description of image 2',
    to: '/home'
  },
  {
    type: 'image',
    src: 'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-22//w/1860/IMAGE-portrait-ipad-fill-eafbd7b3-5a99-427c-af52-66f654c42ae4-default_0.jpg?ts=1685103177529',
    alt: 'Description of image 3',
    to: '/about'
  },
  {
    type: 'image',
    src: 'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-shoes-bags/subhome-xmedia-22//w/1860/IMAGE-portrait-ipad-default-fill-1b4b757c-4ce3-4999-b2d9-f2fc9465a45d-default_0.jpg?ts=1685102404051',
    alt: 'Description of image 4',
    to: '/contact'
  },
  // Add more images or videos as needed
];

const ImageCard = ({ media }) => {
  if (media.type === 'image') {
    return (
      <div className="relative h-screen w-full">
        <img src={media.src} alt={media.alt} className="w-full h-full object-cover object-top"/>
        <Link 
          to={media.to} 
          className="absolute bottom-10 right-0 bg-black bg-opacity-50 px-2 py-1 text-sm font-normal text-white"
          style={{fontFamily: 'Helvetica Neue'}}>
          {media.alt}
        </Link>
        <div className="absolute top-0 left-0 w-full">
          <Navigation />
        </div>
      </div>
    );
  } else if (media.type === 'video') {
    return (
      <div className="relative h-screen w-full">
        <video src={media.src} alt={media.alt} className="w-full h-full object-cover object-top" autoPlay loop muted/>
        <Link 
          to={media.to} 
          className="absolute bottom-10 right-0 bg-black bg-opacity-50 px-2 py-1 text-sm font-normal text-white"
          style={{fontFamily: 'Helvetica Neue'}}>
          {media.alt}
        </Link>
        <div className="absolute top-0 left-0 w-full">
          <Navigation />
        </div>
      </div>
    );
  }
};

export default function Slideshow() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMediaIndex((currentMediaIndex + 1) % media.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentMediaIndex]);

  const currentMedia = media[currentMediaIndex];

  return (
    <div className="flex flex-wrap">
      <ImageCard
        key={currentMediaIndex}
        media={currentMedia}
      />
    </div>
  );
}
