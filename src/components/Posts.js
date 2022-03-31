import {React,useState} from 'react';

const Posts = (props) => {
    const [description,setDescription]=useState('');
    return (
        <div className="posts-container">
               
     <form>
  

    <label for="EventDescription">Event Description</label><br/><br/>
    <input type="text" id="EventDescription" name="EventDescription" placeholder="Enter event description" onChange={(e)=>setDescription(e.target.value)}/><br/><br/>
   
    
    
  
    <input className='form-submit-button' type="submit" value="Submit"/>
    </form>
    </div>
        
    );
}

export default Posts;
