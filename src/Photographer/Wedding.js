import React from "react";
import PhotoGallery from "./PhotoGallery";

const photoWedding = [
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V1.jpg`, alt: "Photo 1" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V2.jpg`, alt: "Photo 2" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V3.jpg`, alt: "Photo 3" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V4.jpg`, alt: "Photo 4" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V5.jpg`, alt: "Photo 5" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V6.jpg`, alt: "Photo 6" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V7.jpg`, alt: "Photo 7" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V8.jpg`, alt: "Photo 8" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V9.jpg`, alt: "Photo 9" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V10.jpg`, alt: "Photo 10" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V11.jpg`, alt: "Photo 11" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V12.jpg`, alt: "Photo 12" },
];
const Wedding = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <PhotoGallery photos={photoWedding} />
    </div>
  );
};

export default Wedding;
