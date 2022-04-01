import {React,useState} from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import {FaUserTie} from 'react-icons/fa'
import { useNavigate} from 'react-router-dom'
import '../App.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {registerUser, loginUser} from '../redux/action/authActions'


const SignIn = (props)=> {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [dept,setDept]=useState('')
    const [newUser, setNewUser] = useState(false)

    let navigate = useNavigate()

    const handleSubmit= async (e)=> {
        e.preventDefault()
        if(newUser){
            if(!email || !password || !name || !dept) {
                alert("please enter the required details!")
                return;
            }
            await props.registerUser(email, password, name, dept)
        } else {
            if(!email || !password) {
                alert("please enter the required details!")
                return;
            }
            await props.loginUser(email, password)

        }
    }
    const handleClick = ()=> {
        navigate('/home')
    }
  return (<>
    <Header/>
    <div className="SignInContainer">
        <div className="welcomeText">
            <p className="welcomeTitle">Welcome to ClubHub</p>
        </div>
        
            <form className="SignInForm" 
            
            onSubmit={handleSubmit}>
            <FaUserTie className="logo-main"/>
               <input type='text' 
                id="email" 
                name="email" 
                placeholder='your email' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/><br/>
               <input type='password'
                id="oassword" 
                name="password" 
                placeholder='Password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/><br/>
                {
                    newUser && (
                        <>
                        <input type='text'
                            id="name" 
                            name="name" 
                            placeholder='Your Name' 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}/><br/>
                        <input type='text'
                            id="dept" 
                            name="dept" 
                            placeholder='Your Dept' 
                            value={dept}
                            onChange={(e)=>setDept(e.target.value)}/><br/>
                        </>
                    )
                }
                <input className='form-submit-button' type="submit" value={newUser ? "Sign Up" : "Log in"}/>
                {
                    newUser ? (
                         <p onClick={() => setNewUser(false)} 
                         style={{color:'blue', textDecoration:'underline'}}>Aleady have an account? Login</p>
                    ) : (
                        <p onClick={() => setNewUser(true)} style={{color:'blue', textDecoration:'underline'}}>New user? Register</p>

                    )
                }
            </form>
        {
            props.auth.isAuthenticated && <p onClick={handleClick} 
            style={{backgroundColor:'#fff', padding:10, color:'#333', cursor:'pointer'}}>Go to Home</p> 
        }
    </div>
    <Footer/>
  
  </>
    
    
  )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        registerUser,
        loginUser
    }, dispatch)
);
  

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)