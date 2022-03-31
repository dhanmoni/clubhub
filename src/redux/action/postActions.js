import { 
    GET_ALL_POSTS,
    ADD_POST,
    DELETE_POST, 
    SET_ERROR
} from './types'

import { firestoreDB} from '../../Firebase/firebaseConfig'

import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'

export const getAllPosts = () => dispatch  => {
    console.log("get post called!!")
    // call firebase api and retrieve posts
    // dispatch the getPost action and pass response to get stored in redux
    const colRef = collection(firestoreDB, 'Posts')

    let posts = []
    getDocs(colRef)
        .then(snapshot => {
            snapshot.docs.forEach(doc=> {
                posts.push({...doc.data(), id: doc.id})
            })
        })
        .then(()=>
            dispatch({
                type: GET_ALL_POSTS,
                payload: posts
            }
            )
        )
        .catch(()=> {
            dispatch({
                type: SET_ERROR
            })
        })
}

export const addPost = (postData) => dispatch  => {
    console.log("add post called!!")
    // call firebase api and add post
    // dispatch the addPost action and pass response to get stored in redux

    // call firebase api and retrieve posts
    // dispatch the getPost action and pass response to get stored in redux
    const colRef = collection(firestoreDB, 'Posts')

    addDoc(colRef, {
        postText: postData.text,
        postClub: postData.club,
        postAuthor: postData.author
    })
        .then(()=>
            dispatch({
                type: ADD_POST
            }
            )
        )
        .catch(()=> {
            dispatch({
                type: SET_ERROR
            })
        })
}

