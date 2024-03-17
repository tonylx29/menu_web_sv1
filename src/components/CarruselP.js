import { useState } from 'react';
import '../styles/carruselprincipal.css'
const CarruselP = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        const newIndex = (activeIndex - 1 + 3) % 3; // 3 es el número total de imágenes en el carrusel
        setActiveIndex(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = (activeIndex + 1) % 3; // 3 es el número total de imágenes en el carrusel
        setActiveIndex(newIndex);
    };

    return (
        <div id="carousel-1" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                    <img src="https://www.unl.edu.ec/sites/default/files/galeria/2021/02/HEADER1.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Universidad Nacional De Loja</h1>
                        <p>En los tesoros de la sabiduría está la glorificación de la vida</p>
                        <p>Educamos para transformar</p>
                    </div>
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                    <img src="https://unl.edu.ec/sites/default/files/noticia/2020-06/WhatsApp%20Image%202020-06-09%20at%2012.13.16.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Universidad Nacional De Loja</h1>
                        <p>En los tesoros de la sabiduría está la glorificación de la vida</p>
                        <p>Educamos para transformar</p>
                    </div>
                </div>
                <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                    <img src="https://www.unl.edu.ec/sites/default/files/galeria/2022/02/b.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Universidad Nacional De Loja</h1>
                        <p>En los tesoros de la sabiduría está la glorificación de la vida</p>
                        <p>Educamos para transformar</p>
                        
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={handlePrevClick}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={handleNextClick}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CarruselP;