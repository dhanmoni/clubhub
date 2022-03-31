import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {registerUser, loginUser, logout} from '../redux/action/authActions'

function Modal(props) {

    const signupUser=()=> {
        props.registerUser('dhanmoni@gmail.com', '123456', 'Dhanmoni Nath', 'MCA')
    }
    const loginUser=()=> {
        props.loginUser('dhanmoni@gmail.com', '123456')
    }
    const logoutUser=()=> {
        props.logout()
    }
    
  return (
    <div>
        <button onClick={signupUser}>Sign up</button>
        <button onClick={loginUser}>Sign in</button>
        <button onClick={logoutUser}>Logout</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        registerUser,
        loginUser,
        logout
    }, dispatch)
);
  

export default connect(mapStateToProps, mapDispatchToProps)(Modal)