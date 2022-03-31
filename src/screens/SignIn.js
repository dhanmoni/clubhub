import {React,useState} from 'react'
import Footer from '../components/Footer';
import Header from '../screens/Header';


export default function SignIn(props) {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('')
  return (<>
    <Header/>
    <div className="SignInContainer">
        
            <form className="SignInForm" action="">
                <img className="logo-main" src={require("../assets/user.png")}/><br/>
               <input type='text'id="Username" name="Username" placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/><br/>
               <input type='password'id="Password" name="Password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/><br/>
               <input className='form-submit-button' type="submit" value="Login"/>
            </form>
        
    </div>
    <Footer/>
  
  </>
    
    
  )
}
