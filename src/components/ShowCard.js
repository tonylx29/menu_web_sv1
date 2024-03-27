import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

/* Funciones para eliminar un documento */
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
//import Navbar from './Navbar'

const MySwal = withReactContent(Swal)

export const ShowCard = () => {
    //1) Configurar los hooks
    const [bloques, setBloques] = useState([])

    //2) Referenciar a la DB firestore.
    //const bloquesColecction = collection(db, "bloques")


    //3) Funcion para mostrar todos los docs.
    const getBloques = useCallback(async () => {
        const bloquesCollection = collection(db, 'bloques');
        const snapshot = await getDocs(bloquesCollection);
        const bloquesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBloques(bloquesData);
    }, []);

    // 4 ) Funcion para eliminar un doc.
    const deleteBloque = async (id) => {
        const bloqueDoc = doc(db, "bloques", id)
        await deleteDoc(bloqueDoc)
        getBloques()
    }

    // 5) Funcion de confirmacion para Sweet Alert 2.
    const confirmDelete = (id) => {
        MySwal.fire({
            title: "¿Está seguro de eliminar?",
            text: "¡No podrá revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //llamamos a la funcion para eliminar
                deleteBloque(id)
                Swal.fire({
                    title: "Eliminado!",
                    text: "Su archivo ha sido eliminado.",
                    icon: "success"
                });
            }
        });
    }

    // 6) Usamos useEffect.
    useEffect(() => {
        getBloques();
    }, [getBloques]);

    // 7) Devolvemos visto de nuestro componente.

    return (
        <>
            {/*  <Navbar /> */}
            <div className='container'>
                <div className='row'>
                    <div className='col'>

                        <div className='d-grid gap-2'>
                            <Link to="/create" className='btn btn-primary mt-2 mb-2'> Crear Nuevo Bloque </Link>

                        </div>

                        <table className='table table-dark table-hover'>
                            <thead>
                                <tr>
                                    <th> Titulo </th>
                                    <th> Descripción </th>
                                    <th> Imagen </th>
                                    <th> onClick </th>
                                    <th> Acciones </th>
                                </tr>
                            </thead>

                            <tbody>
                                {bloques.map((bloque) => (
                                    <tr key={bloque.id}>
                                        <td> {bloque.Titulo} </td>
                                        <td> {bloque.descripción} </td>
                                        <td><img src={bloque.imagen} alt="Imagen de la tarjeta" style={{ maxWidth: '100px', maxHeight: '100px' }} /></td>
                                        <td><a href={bloque.onClick}>{bloque.onClick}</a></td>
                                        <td>
                                            <Link to={`/edit/${bloque.id}`} className='btn btn-light'> <i className="fa-solid fa-pen-to-square"> </i> </Link>
                                            <button onClick={() => { confirmDelete(bloque.id) }} className='btn btn-danger'> <i className="fa-solid fa-trash"></i>  </button>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>

                        </table>


                    </div>

                </div>

            </div>
        </>
    )
}

export default ShowCard; 