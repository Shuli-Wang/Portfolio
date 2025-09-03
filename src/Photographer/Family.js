import React from "react";
import PhotoGallery from "./PhotoGallery";

const photoFamily = [
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V1.jpg`, alt: "Husband Kissing Pregnant Wife's Belly" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V2.jpg`, alt: "Father Holding Five Year Old Son in Home" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V3.jpg`, alt: "Newborn Sitting in Mother's Arm" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V4.jpg`, alt: "Father and Mother Playing Toys with Son on Sofa" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V5.jpg`, alt: "Husband Hugging Pregnant Wife in Kitchen" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Family-V6.jpg`, alt: "Boy Sitting on His Father's Shoulder" },
];

const Family = () => {
  window.scrollTo(0, 0);
  return (<div>
    <PhotoGallery photos={photoFamily} />
  </div>
  );
};

export default Family;
