// Card.js
import React from 'react';
import '../styles/card.css';

const Card = ({ image, title, description, onClick }) => {
    return (
        <div className="card" >
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <a href={onClick} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Acceder</a>
        </div>
    );
}

export default Card;