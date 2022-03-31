import { auth, firestoreDB } from '../../Firebase/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore'

import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT,
  SET_ERROR,
  SET_LOADING
} from "./types";

// Load User
export const registerUser = (email, password, name, dept) => async (dispatch) => {
  dispatch({
      type: SET_LOADING
  })
  try {
    // call firebase sign up function
    createUserWithEmailAndPassword(auth, email, password)
        .then(async(res) => {
            console.log(res)
            const data = {
                name,
                email,
                dept
            }
            const uid = res.user.uid
            try{
                // use setDoc to store the id of user as the documentID in firestore
                await setDoc(doc(firestoreDB, "Users", uid), data);
                dispatch({
                    type: REGISTER_USER,
                    payload: {...data, id: uid }
                })
            } catch(err){
                console.log(err)
                dispatch({
                    type: SET_ERROR
                })
            }
        })
        .catch((error) => {
            console.log(error)
            dispatch({
            type: SET_ERROR
        })
    });
  } catch (err) {
    console.log(err)
  }
};

export const loginUser = (email,password) => dispatch  => {
    // login user by calling firebase api
    // dispatch the loginUser action and pass response to get stored in redux
    dispatch({
        type: SET_LOADING
    })
    signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res)
            const uid = res.user.uid
            const docRef = doc(firestoreDB, 'Users', uid)
            getDoc(docRef)
                .then(doc => {
                    console.log(doc)
                    if (doc.exists()) {
                        const user_data = doc.data()
                        dispatch({
                            type: LOGIN_USER,
                            payload: {...user_data, id: uid }
                        })
                    } else {
                        console.log("User does not exist anymore.")
                        return;
                    }
                })
                
                .catch(error => {
                    console.log(error)
                    dispatch({
                        type: SET_ERROR
                    })
                });
        }
    )
    .catch((error) => {
        console.log(error)
        dispatch({
            type: SET_ERROR
        })
    });    

}

// Logout
export const logout = () => ({ type: LOGOUT });
