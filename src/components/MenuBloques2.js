import React from 'react'
import Component from './Component';
import '../styles/bloques2.css'


const redirigir = () => {
    window.location.href = 'https://webobook.com/public/64f91d034b930e297b294832,en';
};
const redirigirA15 = () => {
    window.location.href = 'https://orbix360.com/lZP1jdnPX';
};

const redirigirA16 = () => {
    window.location.href = 'https://orbix360.com/s6EDX39-j';
};


export const MenuBloques2 = () => {
    return (

        <div className="Pincipal" s>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">UNL</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Component />
            <div class="principal">
                <div class="card" style={{ width: '30rem', border: '2px solid gray' }}>
                    <img src="img/imagen1.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">
                            <h3>Bloque A2 </h3>
                            En esta sección se encuentra en el campus de la FEIRNNR, en este bloque se tiene el recorrido en 360° del 3er y 4to piso.
                            <br />
                            Las aulas que se tienen son:
                            <ul>
                                <li>Laboratorio de redes.</li>
                                <li>Oficina de Electromecánica.</li>
                                <li>Laboratio de Telecomunicaciones y antenas.</li>
                                <li>Laboratio de Electónica.</li>
                                <li>Aula de Telemática.</li>
                                <li>i2tec.</li>
                            </ul>

                        </p>

                    </div>
                    <button onClick={redirigir} type="button" class="btn btn-primary btn-lg">Hacer recorrido 360°</button>
                </div>

                <div class="card" style={{ width: '30rem', border: '2px solid gray' }}>
                    <img src="img/imagen1.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">
                            <h3>Bloque A15 </h3>
                            Laboratorio de MicroPropagación Vegetal de la FARNNR:
                        </p>

                    </div>
                    <button onClick={redirigirA15} type="button" class="btn btn-primary btn-lg">Hacer recorrido 360°</button>
                </div>

                <div class="card" style={{ width: '30rem', border: '2px solid gray' }}>
                    <img src="img/imagen1.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3>Bloque A16 </h3>
                        <p class="card-text">Modalidad de Estudios a Distancia (MED):</p>

                    </div>
                    <button onClick={redirigirA16} type="button" class="btn btn-primary btn-lg">Hacer recorrido 360°</button>
                </div>

            </div>



        </div>

    );
}
