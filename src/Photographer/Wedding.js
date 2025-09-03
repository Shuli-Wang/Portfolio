import React from "react";
import PhotoGallery from "./PhotoGallery";

const photoWedding = [
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V1.jpg`, alt: "Couple Kissing on a Bench with the Parliament in the Background" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V2.jpg`, alt: "Couple Kissing in the Window of Ottawa City Hall with Sun Shining on It" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V3.jpg`, alt: "Coudple Looking at Each Other in Front of the Christmas Tree in City Hall" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V4.jpg`, alt: "Bride Signing Wedding Documentations and the Groom is Looking at Her" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V5.jpg`, alt: "Couple Dancing in the City Hall with a Parliament Background" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V6.jpg`, alt: "Bride and Groom Holding Hands Walking under a Window" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V7.jpg`, alt: "Couple Waving Hands in Front of the Parliament Building" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V8.jpg`, alt: "Groom Standing at the Other Side of the Building Waving Hands to the Bride" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V9.jpg`, alt: "Couple Kissing in Front of the Window of City Hall with a Clear Background of Far Away Parliament Building" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V10.jpg`, alt: "Couple Standing in the Church to Get Married" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V11.jpg`, alt: "Newly Married Couple Dacing Together" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Wedding-V12.jpg`, alt: "Couple Holding Hands Walking Through a Indoor Bridge with Christmas Decorations" },
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
