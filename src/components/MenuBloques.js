import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/bloques.css';
import Bloque13Img from '../images/bloque_13.png';
import Bloque_6_7_8 from '../images/Bloque_6_7_8.png';


export const MenuBloques = () => {
    return (
        <div className="menu">
          <h2>Menú 2</h2>
          <div className="menu-options">

            <div className="option">
              <h3>Bloque 2 ,Piso 2</h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p> Bloqu 2 , Piso 2</p>
              <Link to="https://orbix360.com/t/zECBH45BgPNRRFBX8lEjIscCrgm2/4699527850229760"><button>Botón 2</button></Link>
            </div>

            <div className="option">
              <h3>Bloque 2 ,Piso 3 y 4</h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p> Bloqu 2 , Piso 3 y 4</p>
              <Link to="https://webobook.com/public/64f91d034b930e297b294832,en"><button>Botón 2</button></Link>
            </div>

            <div className="option">
              <h3> Bloque A3, A4 y A5 </h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p>Bloque A3, A4 Y A5 </p>
              <Link to="https://webobook.com/public/6508dac389eabf38172d8332,en"><button>Botón 2</button></Link>
            </div>

            <div className="option">
              <h3> Planta Baja Laboratorios de FEINNIR   </h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p> Laboratorios 1 y 2 , Oficina 1 y 2</p>
              <Link to="https://orbix360.com/t/4zAuzKBXxCZ3EdF8yzZD2ijY8dg2/5954772167294976"><button>Botón 2</button></Link>
            </div>

            <div className="option">
              <h3> Bloque 6, 7 y 8 </h3>
              <img src={Bloque_6_7_8} alt="Imagen 2" />
              <p>Bloque 6, 7 y 8</p>
              <Link to="https://webobook.com/public/650a2f2f86a6af41742a1e42,en"><button>Botón 2</button></Link>
            </div>

            <div className="option">
              <h3>Bloque 12, 13 y 14</h3>
              <img src= {Bloque13Img} alt="Imagen 2" />
              <p>Bloque 12, 13 y 14</p>
              <Link to="https://webobook.com/public/6506163ca993850efc046b52,en"><button>Botón 2</button></Link>
            </div>


            <div className="option">
              <h3> Laboratorios de propagacion vegetal</h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p>Bloque 7</p>
              <Link to="https://orbix360.com/t/mu99qh2ggnV8n7a8KcCLxYmvuOq2/4819659964547072"><button>Botón 2</button></Link>
            </div>

            <div className="option">
              <h3> Modalidad Distancia </h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p>Bloque 7</p>
              <Link to="https://orbix360.com/t/mu99qh2ggnV8n7a8KcCLxYmvuOq2/6011908526178304"><button>Botón 2</button></Link>
            </div>

          </div>
        </div>
    );
}
