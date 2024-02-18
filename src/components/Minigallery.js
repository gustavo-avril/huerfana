import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import cabins from "../cabins.json";
import "../css/minigallery.css";

function Minigallery({ cabinName }) {
  const [toggler, setToggler] = useState(false);
  const cabinFilter = cabins.filter((c) => c.name === cabinName)[0];
  const imageUrls = cabinFilter.images.map((i) => i.url);

  return (
    <>
      <div className="thumbs">
        {cabinFilter.images.map((t, index) => (
          <div key={index}>
            <img
              src={t.thumb}
              alt={cabinFilter.name}
              onClick={() => setToggler(index)}
            />
          </div>
        ))}
      </div>
      <FsLightbox toggler={toggler} sources={imageUrls} />
    </>
  );
}

export default Minigallery;
