import React, { useState, useEffect, useCallback} from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Carrusel from './Carrusel'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import '../styles/bloques2.css';

const MenuBloquesDinamicos = () => {
    const [cards, setCards] = useState([]);

    const getBloques = useCallback(async () => {
        const bloquesCollection = collection(db, 'bloques');
        const snapshot = await getDocs(bloquesCollection);
        const bloquesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCards(bloquesData);
    }, []);

    useEffect(() => {
        getBloques();
    }, [getBloques]);

    return (
        <div className="Principal">
            <Navbar />
            <Carrusel/>
            <div className="principal">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        image={card.imagen}
                        title={card.Titulo}
                        description={card.descripción}
                        onClick={card.onClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default MenuBloquesDinamicos;

