import React from "react";
import PhotoGallery from "./PhotoGallery";

const photoPersonal = [
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V1.jpg`, alt: "Photo 1" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V2.jpg`, alt: "Photo 2" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V3.jpg`, alt: "Photo 3" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V4.jpg`, alt: "Photo 4" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V5.jpg`, alt: "Photo 5" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V6.jpg`, alt: "Photo 6" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V7.jpg`, alt: "Photo 7" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V8.jpg`, alt: "Photo 8" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V9.jpg`, alt: "Photo 9" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V10.jpg`, alt: "Photo 10" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V11.jpg`, alt: "Photo 11" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V12.jpg`, alt: "Photo 12" },
];
const Personal = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <PhotoGallery photos={photoPersonal} />
    </div>
  );
};

export default Personal;
