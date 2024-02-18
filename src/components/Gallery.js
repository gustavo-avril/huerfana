import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "../css/sections.css";

function Gallery() {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1); // Add state to track the current slide

  const openLightboxOnSlide = (slide) => {
    setSlide(slide); // Set the current slide
    setToggler(!toggler); // Toggle the lightbox
  };
  return (
    <>
      <div className="title-wrapper">
        <h1>Galería</h1>
      </div>
      <div className="gallery main">
        {Array.from({ length: 12 }, (_, i) => (
          <img
            key={i}
            src={`img/galeria/thumb/huerfana${i + 1}.webp`}
            onClick={() => openLightboxOnSlide(i + 1)} // Open lightbox on the clicked slide
            alt={`Fotos galería ${i + 1}`}
          />
        ))}
      </div>
      <FsLightbox
        toggler={toggler}
        sources={Array.from(
          { length: 12 },
          (_, i) => `img/galeria/huerfana${i + 1}.webp`,
        )} // Add the sources for the lightbox images
        slide={slide} // Set the initial slide
      />
      ;
    </>
  );
}

export default Gallery;
