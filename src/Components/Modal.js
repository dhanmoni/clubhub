import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {registerUser, loginUser} from '../redux/action/authActions'

function Modal(props) {

    const signupUser=()=> {
        props.registerUser('dmn@gmail.com', '123456', 'Dhanmoni', 'MCA')
    }
    const loginUser=()=> {
        props.loginUser('dmn@gmail.com', '123456')
    }
    
  return (
    <div>
        <button onClick={signupUser}>Sign up</button>
        <button onClick={loginUser}>Sign in</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        registerUser,
        loginUser
    }, dispatch)
);
  

export default connect(mapStateToProps, mapDispatchToProps)(Modal)