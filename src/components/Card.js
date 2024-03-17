// Card.js
import React from 'react';
import '../styles/bloques.css';

const Card = ({ image, title, description, onClick }) => {
    return (
        <div className="card" style={{ width: '30rem', border: '2px solid gray' }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3>{title}</h3>
                <p className="card-text">{description}</p>
            </div>
            <a href={onClick} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Ver video</a>
        </div>
    );
}

export default Card;