import React from "react";
import PhotoGallery from "./PhotoGallery";

const photoPersonal = [
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V1.jpg`, alt: "Pregnant Women Sitting on a Bench in Sunset" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V2.jpg`, alt: "Women in Retro Style Holding Boutique Standing Near River" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V3.jpg`, alt: "Graduate Student Waving Hand in Graduation Ceremony" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V4.jpg`, alt: "Woemn Holding Boutique in the a Quiet Night Near Rideau Canal" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V5.jpg`, alt: "Women in White Dress Staring at the Lens in City Lights" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V6.jpg`, alt: "Women Holding Boutiqueafter Her Graduation Ceremony" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V7.jpg`, alt: "Women Holding Boutique in Snow with a Big Smile" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V8.jpg`, alt: "Women Holding Her Degree in Hand with a Big Smile" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V9.jpg`, alt: "Teen Girl Waving Hand om the Street in a Sunny Day" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V10.jpg`, alt: "Women Dancing in the Forest" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V11.jpg`, alt: "Female Pianist Standing in Front of the Piano" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V12.jpg`, alt: "PregnantWomen-Standing in Front of a Window Covered with White Curtains" },
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
