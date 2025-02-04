import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./PhotoGallery.css";

const PhotoGallery = ({ photos }) => {
  const [zoomedPhoto, setZoomedPhoto] = useState(null);

  const handlePhotoClick = (photoSrc) => {
    setZoomedPhoto(photoSrc); // Set the clicked photo as zoomed
  };

  const closeZoom = () => {
    setZoomedPhoto(null); // Close the zoomed photo
  };

  return (
    <div>
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item" onClick={() => handlePhotoClick(photo.src)}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      <Link to="/Photographer">
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            padding: "0",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50"
            height="50"
          >
            <circle cx="25" cy="25" r="24" stroke="#F08C32" fill="transparent" strokeWidth="1" />
            <polyline
              points="30,15 20,25 30,35"
              fill="none"
              stroke="#F08C32"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Link>

      {/* Zoomed Photo Overlay */}
      {zoomedPhoto && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img className="zoomed-photo" src={zoomedPhoto} alt="Zoomed" />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
