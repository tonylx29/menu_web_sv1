import { ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../firebaseConfig/firebase';

// Función para cargar una imagen en Firebase Storage
export const uploadImageToStorage = async (imageFile) => {
    try {
      const storageRef = ref(storage, 'menu_images/' + imageFile.name);
      const snapshot = await uploadBytes(storageRef, imageFile);
      return snapshot.ref.getDownloadURL();
    } catch (error) {
      console.error('Error al cargar la imagen en Firebase Storage:', error);
      throw error;
    }
  };
  
  // Función para almacenar metadatos en Firestore Database
  export const addMenuOptionToFirestore = async (title, description, imageURL) => {
    try {
      await addDoc(collection(db, 'menu_options'), {
        title: title,
        description: description,
        imageURL: imageURL,
      });
    } catch (error) {
      console.error('Error al almacenar los metadatos en Firestore Database:', error);
      throw error;
    }
  };
  
  // Función para manejar el proceso completo de carga de imagen y almacenamiento de metadatos
  export const handleMenuOptionSubmission = async (title, description, imageFile) => {
    try {
      const imageURL = await uploadImageToStorage(imageFile);
      await addMenuOptionToFirestore(title, description, imageURL);
      console.log('Opción de menú agregada exitosamente.');
    } catch (error) {
      console.error('Error al agregar opción de menú:', error);
    }
  };
  