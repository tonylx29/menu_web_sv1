import React from 'react'
import '../styles/principal.css'
import { Link } from 'react-router-dom';
import agropecuariaImg from '../images/agropecuaria.jpg';
import educacionImg from '../images/educacion.jpg';
import energiaImg from '../images/energia.jpg';
import juridicaImg from '../images/juridica.jpg';
import saludImg from '../images/salud.jpg';
import educacionDistanciaImg from '../images/educacion_distancia.jpg';

export const PaginaPrincipal = () => {  
    return (
        <div className="menu">
          <h2>Pagina Principal </h2>
            <div className="menu-options">
              <div className="option">
                <img src= {agropecuariaImg} alt="Imagen 2" />
                <p>Agropecuaria y de Recursos Naturales Renovable</p>
                <Link to="/bloques"><button>Botón 3</button></Link>
              </div>

              <div className="option">
                <img src={educacionImg} alt="Imagen 2" />
                <p> Educación, el Arte y la Comunicación</p>
                <Link to="/bloques"><button>Botón 3</button></Link>
              </div>

              <div className="option">
                <img src= {energiaImg} alt="Imagen 2" />
                <p> Energía, las Industrias y los Recursos Naturales no Renovables</p>
                <Link to="/bloques"><button>Botón 3</button></Link>
              </div>

              <div className="option">
                <img src= {juridicaImg} alt="Imagen 2" />
                <p> Jurídica, Social y Administrativa</p>
                <Link to="/bloques"><button>Botón 3</button></Link>
              </div>

              <div className="option">
                <img src= {saludImg} alt="Imagen 2" />
                <p> Salud Humana</p>
                <Link to="/bloques"><button>Botón 3</button></Link>
              </div>

              <div className="option">
                <img src= {educacionDistanciaImg} alt="Imagen 2" />
                <p> Unidad de Educación a Distancia y en Línea </p>
                <Link to="/bloques"><button>Botón 3</button></Link>
              </div>

            </div>
        </div>
    );
}
