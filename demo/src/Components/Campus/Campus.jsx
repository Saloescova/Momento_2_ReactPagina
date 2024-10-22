import React from "react";
import "./Campus.css";

import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white_arrow.png'

const Campus = () => {
  return (
    <div className="campus-fluid">
        <div className="gallery">
      <img src={gallery_1} alt="Gallery 1" />
      <img src={gallery_2} alt="Gallery 2" />
      <img src={gallery_3} alt="Gallery 3" />
      <img src={gallery_4} alt="Gallery 4" />
    </div>
    <div className="d-grid">
    <button className="btn dark-btn">Ver más aqui <img src={white_arrow} alt="" /></button>
    </div>
    </div>
  );
};

export default Campus;
