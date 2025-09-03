import React from "react";
import PhotoGallery from "./PhotoGallery";

const photoPersonal = [
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V1.jpg`, alt: "Photo-of-Pregnant-Women-Sitting-on-a-Bench-in-Sunset" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V2.jpg`, alt: "Photo-of-Women-in-Retro-Style-Holding-Boutique-Standing-Near-River" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V3.jpg`, alt: "Photo-of-Graduate-Student-Waving-Hand-in-Graduation-Ceremony" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V4.jpg`, alt: "Photo-of-Woemn-Holding-Boutique-in-the-Quiet-Night-Near-Rideau-Canal" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V5.jpg`, alt: "Photo-of-Women-in-White-Dress-Staring-at-the-Lens-in-City-Lights" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V6.jpg`, alt: "Photo-of-Women-Holding-Boutique-after-Her-Graduation-Ceremony" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V7.jpg`, alt: "Photo-of-Women-Holding-Boutique-in-Snow-with-a-Big-Smile" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V8.jpg`, alt: "Photo-of-Women-Holding-Her-Degree-in-Hand-with-a-Big-Smile" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V9.jpg`, alt: "Photo-of-Teen-Girl-Waving-Hand-in-The-Street" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V10.jpg`, alt: "Photo-of-Women-Dancing-in-the-Forest" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V11.jpg`, alt: "Photo-of-Female-Pianist-Standing-in-Front-of-the-Piano" },
  { src: `${process.env.PUBLIC_URL}/images/photographer/Personal-V12.jpg`, alt: "Photo-of-Pregnant-Women-Standing-in-Front-of-a-Window-Covered-with-White-Curtains" },
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
