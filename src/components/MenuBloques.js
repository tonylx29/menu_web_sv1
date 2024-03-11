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
              <h3>Bloque 1</h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p>Bloque 1</p>
              <Link to="/otro-link"><button>Botón 2</button></Link>
            </div>

            <div className="option">
              <h3>Bloque 2</h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p>Bloque 2</p>
              <Link to="/otro-link"><button>Botón 2</button></Link>
            </div>

            <div className="option">
              <h3> Bloque A3, A4 y A5 </h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p>Bloque A3, A4 Y A5 </p>
              <Link to="/otro-link"><button>Botón 2</button></Link>
            </div>

            <div className="option">
              <h3> Laboratorios 1 y 2, Oficina 1 y 2  </h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p> Laboratorios 1 y 2 , Oficina 1 y 2</p>
              <Link to="/otro-link"><button>Botón 2</button></Link>
            </div>

            <div className="option">
              <h3> Bloque 6, 7 y 8 </h3>
              <img src={Bloque_6_7_8} alt="Imagen 2" />
              <p>Bloque 6, 7 y 8</p>
              <Link to="https://webobook.com/public/650a2f2f86a6af41742a1e42,en"><button>Botón 2</button></Link>
            </div>

            <div className="option">
             <h3>Bloque 5 </h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p>Bloque 5</p>
              <Link to="/otro-link"><button>Botón 2</button></Link>
            </div>

            <div className="option">
              <h3>Bloque 12, 13 y 14</h3>
              <img src= {Bloque13Img} alt="Imagen 2" />
              <p>Bloque 12, 13 y 14</p>
              <Link to="https://webobook.com/public/6506163ca993850efc046b52,en"><button>Botón 2</button></Link>
            </div>


            <div className="option">
              <h3> Modalidad Distancia Y  Laboratorios de propagacion vegetal</h3>
              <img src="imagen2.jpg" alt="Imagen 2" />
              <p>Bloque 7</p>
              <Link to="/otro-link"><button>Botón 2</button></Link>
            </div>

          </div>
        </div>
    );
}
