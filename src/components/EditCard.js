import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import { uploadImageToStorage } from './StorageUtils';
import Navbar from './Navbar';
export const EditCard = () => {
  const [Titulo, setTitulo] = useState('')
  const [descripción, setDescripción] = useState('')
  const [imagen, setImagen] = useState('')
  const [onClick, setOnClick] = useState('');
  const [nuevaImagen, setNuevaImagen] = useState(null); // Estado para almacenar la nueva imagen seleccionada
  const navigate = useNavigate()
  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault()
    let nuevaURLImagen = imagen; // Por defecto, utiliza la URL de la imagen existente

    if (nuevaImagen) {
      // Si se ha seleccionado una nueva imagen, cárgala en Firebase Storage
      nuevaURLImagen = await uploadImageToStorage(nuevaImagen);
    }

    const bloque = doc(db, "bloques", id)
    const data = { Titulo: Titulo, descripción: descripción, imagen: nuevaURLImagen, onClick: onClick }
    await updateDoc(bloque, data)
    navigate('/bloques')

  }

  const getBloqueById = async (id) => {
    const bloque = await getDoc(doc(db, "bloques", id))
    if (bloque.exists()) {
      //console.log(bloque.data)
      setTitulo(bloque.data().Titulo);
      setDescripción(bloque.data().descripción);
      setImagen(bloque.data().imagen);
      setOnClick(bloque.data().onClick);
    } else {
      console.log('El bloque no existe')
      console.log(bloque.data)
    }
  }

  useEffect(() => {
    getBloqueById(id)
  }, [id]);

  return (
    <div><Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1> Editar Bloque </h1>
            <form onSubmit={update}>
              <div className='mb-3'>
                <label className='form-label'> Título </label>
                <input
                  value={Titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  type="text"
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'> Descripción </label>
                <input
                  value={descripción}
                  onChange={(e) => setDescripción(e.target.value)}
                  type="text"
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'> Imagen </label>
                {imagen && <img src={imagen} alt="Imagen actual" />} {/* Mostrar la imagen actual */}
                <input
                  type="file"
                  className='form-control'
                  onChange={(e) => setNuevaImagen(e.target.files[0])} // Actualizar la nueva imagen seleccionada
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'> URL </label>
                <input
                  value={onClick}
                  onChange={(e) => setOnClick(e.target.value)}
                  type="text"
                  className='form-control'
                />
              </div>
              <button type='submit' className='btn btn-primary'> Guardar cambios </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCard;
