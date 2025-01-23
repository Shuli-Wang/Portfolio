import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
    `${process.env.PUBLIC_URL}/images/photographer/Wedding-V5.jpg`,
    `${process.env.PUBLIC_URL}/images/photographer/Personal-V1.jpg`,
    `${process.env.PUBLIC_URL}/images/photographer/Family-V4.jpg`,
    `${process.env.PUBLIC_URL}/images/photographer/Personal-V6.jpg`,
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
          <h1>Life often pulls us into its daily rhythm—rush hour, housework, and the grind of work. Yet, now and then, a moment lifts us out of the ordinary, reminding us why it all matters.</h1>
          <h1>Life is measured not by years or days but by the moments that take our breath away.</h1>
        </div>
        <div className='container-category'>
          <div className='container-category-child-left'>
            <div className='container-type'>
              <button className="button-type"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/photographer/Wedding-V8.jpg)` }}>
              </button>
              <div className='container-type-child'>
              <h1>Wedding</h1>
              <p>One of life’s most cherished milestones is the celebration of two people starting a new chapter together. It's not just about saying “I do”, but about the shared journey of planning, the anticipation of something, and that quiet, shared smile that evening. It’s found in the bouquet in your hands, the breeze carrying the laughter of loved ones, and the memories preserved in every heartfelt photograph. These moments, both big and small, are a beautiful reflection of the love and connection between two people ready to take on the world together.</p>
              <p>Love doesn’t follow rules or logic—it simply is. Whether rich or poor, brilliant or quirky, love brings people together in ways that are hard to explain. It blinds us to the small stuff and opens our eyes to what truly matters. </p>
              </div>
            </div>
          </div>

          <div className='container-category-child-right'>
          <div className='container-type' style={{height:'50%'}}>
              <button className="button-type"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/photographer/Family-V1.jpg)` }}>
              </button>
              <div className='container-type-child'>
              <h1>Family</h1>
              <p>Family is everything — support, laughter, and love. The love between parents and children, the connections between siblings, and the comfort of being surrounded by those who care deeply for you are the things that make a family unique.</p>
              </div>
            </div>
            <div className='container-type'style={{height:'50%'}}>
              <button className="button-type"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/photographer/Personal-V3.jpg)` }}>
              </button>
              <div className='container-type-child'>
              <h1>Personal</h1>
              <p>Whether it’s a birthday, graduation, or simply a desire to capture a new chapter of your life, you can alway explore and express different sides of yourself. It’s about embracing where you are, who you’ve become, and the possibilities that lie ahead.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pmain;