
import {firebaseApp} from './firebase'
import   firebase from 'firebase'
require('firebase/firestore')



const  db = firebase.firestore(firebaseApp)

export  const getColllection =async (collection) =>{
    const result ={ statusResponse : false , data:null , error: null}

    try {
         const data = await db.collection(collection).get()
         const arrayData = data.docs.map(doc =>({id : doc.id, ...doc.data()}))
         result.statusResponse = true
         result.data = arrayData
        
    } catch (error) {

        result.error = error
        
    }
      return result
}

    export const  addDocument = async (collection, data)=>{
    const result = { statusResponse : false, data: null, error : null}
    try {
        const  response = await db.collection(collection).add(data)
        result.data = {id : response.id}
        result.statusResponse = true

    } catch (error) {

        result.error = error 
        
    }

    return result
}
// obtener cualcquier documento de la base de datos
export const getDocument = async(collection, id) => {
    const result = { statusResponse: false , data: false, error : null}
    try {

        const response = await db.collection(collection).doc(id).get()
        result.data = { id: response.id, ...response.data() }
        result.statusResponse =true
        
    } catch (error) {
        result.error = error 
        
    }
    return result
}

//actulizar la base de datos
export const updateDocument = async(collection, id, data) => {
    const result = { statusResponse: false ,  error : null}
    try {

        await db.collection(collection).doc(id).update(data)
        result.statusResponse = true
        
    } catch (error) {
        result.error = error 
        
    }
    return result
}

// delete de la base de datos
export const deleteDocument = async (collection, id) =>{
    const result ={statusResponse: false, error : null}

    try {
        await db.collection(collection).doc(id).delete()
        result.statusResponse = true
        
    } catch (error) {
        result.error = error
        
    }

    return result
}
