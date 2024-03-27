import React from 'react';
import '../styles/map.css';

import plantaImg from '../images/planta-facultad.jpg'; // Asegúrate de que la ruta a la imagen es correcta
//import Navbar from './Navbar';


export const Map = () => {

  return (


    <div className="map">
      {/*  <Navbar /> */}
      <div className="map-container">
        <div className='titulo'><h2>Facultad de Energía, las Industrias y los Recursos Naturales No Renovables</h2></div>
        
        <img src={plantaImg} useMap="#image-map" alt="Plano de la Facultad" />
        <map name="image-map">
          <area alt="BloqueA2_P1" title="BloqueA2_P1" href="https://orbix360.com/t/zECBH45BgPNRRFBX8lEjIscCrgm2/4699527850229760" coords="519,279,541,283,540,296,518,293" shape="poly" />
          <area alt="BloqueA3-A4-A5" title="BloqueA3-A4-A5" href="https://webobook.com/public/6508dac389eabf38172d8332,en" coords="513,342,514,325,422,315,420,322,389,320,385,333,459,340,460,334,469,337" shape="poly" />
          <area alt="BloqueA2_P2" title="BloqueA2_P2" href="https://orbix360.com/t/4zAuzKBXxCZ3EdF8yzZD2ijY8dg2/5954772167294976" coords="514,294,540,297,538,310,515,306" shape="poly" />
          <area alt="BloqueA12-A13-A14" title="BloqueA12-A13-A14" href="https://webobook.com/public/6506163ca993850efc046b52,en" coords="176,288,159,284,160,273,97,255,112,201,157,212,143,265,174,273" shape="poly" />
          <area alt="BloqueA6-A7-A8" title="BloqueA6-A7-A8" href="https://webobook.com/public/6506163ca993850efc046b52,en" coords="379,330,364,328,369,307,308,292,310,274,339,279,339,271,374,281,382,289,384,303" shape="poly" />
          <area alt="BloqueA2_P3" title="BloqueA2_P3" href="https://webobook.com/public/64f91d034b930e297b294832,en" coords="514,307,537,311,535,322,513,321" shape="poly" />
          <area alt="BloqueA15" title="BloqueA15" href="https://orbix360.com/lZP1jdnPX" coords="65,218,80,220,86,196,70,191" shape="poly" />
          <area alt="BloqueA16" title="BloqueA16" href="https://orbix360.com/s6EDX39-j" coords="53,223,60,190,19,181,11,211" shape="poly" />
        </map>
      </div>
    </div>

  );
};

export default Map;


