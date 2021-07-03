
import {firebaseApp} from './firebase'
import   firebase from 'firebase'
require('firebase/firestore')



const  db = firebase.firestore(firebaseApp)

export  const getColllection =async (collection) =>{
    const result ={ starusResponse : false , data:null , error: null}

    try {
         const data = await db.collection(collection).get()
         const arrayData = data.docs.map(doc =>({id : doc.id, ...doc.data()}))
         result.starusResponse = true
         result.data = arrayData
        
    } catch (error) {

        result.error = error
        
    }
      return result
}