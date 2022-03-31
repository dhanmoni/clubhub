//user posts screen
import {React,useState} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addPost} from '../redux/action/postActions'

import '../App.css'
const PostScreen = (props) => {
    const [description,setDescription]=useState('');

    const callAddPost = (e)=> {
        e.preventDefault()
        if(!description) {
            alert("Please type something first")
            return;
        }
        props.addPost({
            text: description,
            author: props.auth.user.id,
            club: 'AEC Coding Club'
        })
    }
    return (
        <div>
            <Header/>
            <div className="posts-container">         
            <form onSubmit={callAddPost}>
                <label for="EventDescription">Event Description</label><br/><br/>
                <input type="text" 
                    id="EventDescription" 
                    name="EventDescription" 
                    placeholder="Enter event description" 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}/><br/><br/>
                <input className='form-submit-button' type="submit" value="Submit"/>
                </form>
            </div>
            <Footer/>
            </div>
    );
}


const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  };
  
  const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addPost
    }, dispatch)
  );
  export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)
