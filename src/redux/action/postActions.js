import { 
    GET_ALL_POSTS,
    ADD_POST,
    DELETE_POST, 
    SET_ERROR
} from './types'

import { firestoreDB} from '../../Firebase/firebaseConfig'

import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

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
    // First check if the author is the admin of the club-
    const clubRef = collection(firestoreDB, 'Clubs')

    const q = query(clubRef, where("clubAdmin", "==", postData.author));
    getDocs(q).then(snapshot => {
        snapshot.docs.forEach(doc=> {
            if(doc.exists()){
                console.log(doc.data())
           // if the user is the admin then add the post!
                const postRef = collection(firestoreDB, 'Posts')
                addDoc(postRef, {
                    postText: postData.text,
                    postClub: doc.data().clubName,
                    postAuthor: postData.author
                }).then(()=>
                        dispatch({
                            type: ADD_POST
                        }))
                    .catch(()=> {
                        dispatch({
                            type: SET_ERROR
                        })
                })
            } else {
                alert('You are not the admin')
            }
        })
    })

    
}

