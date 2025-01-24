import React from "react";
import PhotoGallery from "./PhotoGallery";

const photoFamily = [
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V1.jpg`, alt: "Photo 1" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V2.jpg`, alt: "Photo 2" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V3.jpg`, alt: "Photo 3" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V4.jpg`, alt: "Photo 4" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V5.jpg`, alt: "Photo 5" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V6.jpg`, alt: "Photo 6" },
];

const Family = () => {
  window.scrollTo(0, 0);
  return (<div>
    <PhotoGallery photos={photoFamily} />
  </div>
  );
};

export default Family;
