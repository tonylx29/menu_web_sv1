import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebaseConfig/firebase';

export const CreateCard = () => {
  const [Titulo, setTitulo] = useState('')
  const [descripción, setDescripción] = useState('')
  const [imagen, setImagen] = useState('')
  const [onClick, setOnClick] = useState('');
  const navigate = useNavigate()

  const bloquesCollection = collection(db, "bloques")

  const store = async (e) => {
    e.preventDefault()
    try {
      // Subir imagen a Firebase Storage
      const storageRef = ref(storage, 'menu_images/' + imagen.name);
      await uploadBytes(storageRef, imagen);

      // Obtener URL de descarga de la imagen
      const imageURL = await getDownloadURL(storageRef);

      // Agregar metadatos a Firestore Database
      await addDoc(bloquesCollection, { Titulo: Titulo, descripción: descripción, imagen: imageURL, onClick: onClick })

      navigate('/bloques')
    } catch (error) {
      console.error('Error al agregar opción de menú:', error);
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1> Crear bloque </h1>
          <form onSubmit={store}>

            <div className='mb-3'>
              <label className='form-label'> Titulo </label>
              <input
                value={Titulo}
                onChange={(e) => setTitulo(e.target.value)}
                type="text"
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'> descripción </label>
              <input
                value={descripción}
                onChange={(e) => setDescripción(e.target.value)}
                type="text"
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'> Imagen </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'> onClick </label>
              <input
                value={onClick}
                onChange={(e) => setOnClick(e.target.value)}
                type="text"
                className='form-control'
              />
            </div>

            <button type='submit' className='btn btn-primary'> Guardar </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateCard;