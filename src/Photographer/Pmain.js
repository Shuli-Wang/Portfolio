import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import "./Pmain.css";

function Pmain() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const isWideScreen = window.innerWidth > 768; // Adjust breakpoint as needed

  const wideImages = [
    `${process.env.PUBLIC_URL}/images/photographer/Main-H1.jpg`,
    `${process.env.PUBLIC_URL}/images/photographer/Main-H2.jpg`,
    `${process.env.PUBLIC_URL}/images/photographer/Main-H3.jpg`,
    `${process.env.PUBLIC_URL}/images/photographer/Main-H4.jpg`,
  ];
  const narrowImages = [
    `${process.env.PUBLIC_URL}/images/photographer/Wedding-V7.jpg`,
    `${process.env.PUBLIC_URL}/images/photographer/Personal-V1.jpg`,
    `${process.env.PUBLIC_URL}/images/photographer/Family-V4.jpg`,
    `${process.env.PUBLIC_URL}/images/photographer/Personal-V5.jpg`,
  ];
  const images = isWideScreen ? wideImages : narrowImages;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [images]);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the passed path
  };

  return (
    <div className='Pmain'>
      <div className='container-Pmain'>
        <div {...handlers} className='container-gallery'>
          <button className="prev-btn" onClick={handlePrev}>
            &#10094;
          </button>
          <div
            className="container-slide"
            style={{ "--current-index": currentIndex }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
              />
            ))}
          </div>
          <button className="next-btn" onClick={handleNext}>
            &#10095;
          </button>
        </div>
        <div className='container-basic' style={{ minHeight: '40vh' }}>
          <h1 style={{ fontWeight: 'normal' }}>Life often pulls us into its daily rhythm—rush hour, housework, and the grind of work. Yet, now and then, a moment lifts us out of the ordinary, reminding us why it all matters.</h1>
          <h1>Life is measured not by years or days but by the moments that take our breath away.</h1>
          <h1 style={{ fontWeight: 'normal', marginBottom: '30px', background: 'linear-gradient(to bottom, transparent 50%, #d2dbd0 50%' }}>Let's explore...</h1>
        </div>
        <div className='container-category'>
          <div className='container-category-child-left'>
            <div className='container-type'>
              <button className="button-type"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/photographer/Wedding-V8.jpg)` }}
                onClick={() => handleNavigation("/Photographer/Wedding")}>
              </button>
              <div className='container-type-child'>
                <h1>Wedding</h1>
                <p>Anyone can make you smile, but it takes someone special to make you smile through tears. A wedding is more than saying "I do"; it's the start of a lifelong journey shaped by shared dreams, the thrill of building a life together, and the quiet smiles exchanged as you stand side by side.</p>
                <p>Love is a universal language, transcending barriers and speaks directly to the heart. Love is evident in every gesture, every glance, and every breath. It’s in the way the couple looks at each other in the quiet moments before the vows. It's how their hands intertwine as they take the next step. It’s in the bouquet held in hands, the laughter carried by the breeze, and the memories captured in photos.</p>
                <p>Love never fails.</p>
              </div>
            </div>
          </div>

          <div className='container-category-child-right'>
            <div className='container-type' style={{ height: '50%' }}>
              <button className="button-type"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/photographer/Family-V1.jpg)` }}
                onClick={() => handleNavigation("/Photographer/Family")}>
              </button>
              <div className='container-type-child'>
                <h1>Family</h1>
                <p>Family is  everything — shared memories, unwavering support, and unconditional love. Whether united by blood or not, through moments of joy or times of hardship, family is where you find peace, comfort, and belonging.</p>
              </div>
            </div>
            <div className='container-type' style={{ height: '50%' }}>
              <button className="button-type"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/photographer/Personal-V8.jpg)` }}
                onClick={() => handleNavigation("/Photographer/Personal")}>
              </button>
              <div className='container-type-child'>
                <h1>Personal</h1>
                <p>Whether it's a birthday, graduation, or simply something special, this moment is just for you. Here we celebrate who you are, honor the journey you've traveled, and embrace the aspirations that drive you. It's about YOU.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pmain;