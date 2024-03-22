import React from 'react'
import '../styles/principal.css'
import { Link } from 'react-router-dom';
import agropecuariaImg from '../images/agropecuaria.jpg';
import educacionImg from '../images/educacion.jpg';
import energiaImg from '../images/energia.jpg';
import juridicaImg from '../images/juridica.jpg';
import saludImg from '../images/salud.jpg';
import educacionDistanciaImg from '../images/educacion_distancia.jpg';
import Navbar from './Navbar';
import CarruselP from './CarruselP';

export const PaginaPrincipal = () => {
  return (
    <div className="menu">
      <Navbar />
      <CarruselP />
      <div className="principal">
        <div className="card mi-carta-principal" >
          <img src={agropecuariaImg} alt="Imagen 2" />

          <div className="card-body">
            <h5 className="card-title">Agropecuaria y de Recursos Naturales Renovable</h5>
          </div>
          <Link to="/bloques"><button className="btn btn-primary">Visitar</button ></Link>
        </div>

        <div className="card mi-carta-principal" >
          <img src={educacionImg} alt="Imagen 2" />

          <div className="card-body">
            <h5 className="card-title">Educación, el Arte y la Comunicación</h5>
          </div>
          <Link to="/bloques"><button className="btn btn-primary">Visitar</button ></Link>
        </div>

        <div className="card mi-carta-principal">
          <img src={energiaImg} alt="Imagen 2" />

          <div className="card-body">
            <h5 className="card-title">Energía, las Industrias y los Recursos Naturales no Renovables</h5>
          </div>
          <Link to="/bloques"><button className="btn btn-primary">Visitar</button ></Link>
        </div>
        <div className="card mi-carta-principal" >
          <img src={juridicaImg} alt="Imagen 2" />

          <div className="card-body">
            <h5 className="card-title">Jurídica, Social y Administrativa</h5>
          </div>
          <Link to="/bloques"><button className="btn btn-primary">Visitar</button></Link>
        </div>

        <div className="card mi-carta-principal" >
          <img src={saludImg} alt="Imagen 2" />

          <div className="card-body">
            <h5 className="card-title">Salud Humana</h5>
          </div>
          <Link to="/bloques"><button className="btn btn-primary">Visitar</button></Link>
        </div>

        <div className="card mi-carta-principal" >
          <img src={educacionDistanciaImg} alt="Imagen 2" />

          <div className="card-body">
            <h5 className="card-title">Unidad de Educación a Distancia y en Línea</h5>
          </div>
          <Link to="/bloques"><button className="btn btn-primary">Visitar</button></Link>
        </div>
      </div>
    </div>
  );
}