import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    './img/1.png','./img/2.png','./img/3.png','./img/4.png','./img/5.png','http://placeimg.com/1200/800/nature','http://placeimg.com/1500/500/nature','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png','./img/1.png',
    
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    
  };

  return (
    
    <div fluid className='text-center' style={{paddingTop:'100px'}}>
      <div className=''>
      <h1 className="text-white text-start" style={{margin:'0 0 5vw 5vw',fontSize: '60px',left: '40vw'}}>PROJECT</h1>
      {images.map((src, index) => (
        
        <Image
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="200"
          key={ index }
          style={{ margin: '1px' }}
          alt=""
        fluid/>
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
      </div>
    </div>
    
  );
}

