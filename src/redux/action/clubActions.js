import { auth, firestoreDB } from '../../Firebase/firebaseConfig'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'

import {
  GET_ALL_CLUBS,
  SET_ERROR,
  SET_LOADING
} from "./types";

// Load User
export const getAllClubs = () => dispatch  => {
   
    // call firebase api and retrieve clubs
    // dispatch the getAllClub action and pass response to get stored in redux
    const colRef = collection(firestoreDB, 'Clubs')

    let clubs = []
    getDocs(colRef)
        .then(snapshot => {
            snapshot.docs.forEach(doc=> {
                posts.push({...doc.data(), id: doc.id})
            })
        })
        .then(()=>
            dispatch({
                type: GET_ALL_CLUBS,
                payload: clubs
            })
        )
        .catch(()=> {
            dispatch({
                type: SET_ERROR
            })
        })
}


export const addClub = (clubData) => dispatch  => {
    
    // dispatch the addClub action and pass response to get stored in redux
    
    const colRef = collection(firestoreDB, 'Clubs')

    addDoc(colRef, {
        clubName: clubData.name,
        clubDesc: clubData.desc
    })
        .then(()=>
            console.log('added')
        )
        .catch(()=> {
            dispatch({
                type: SET_ERROR
            })
        })

}

