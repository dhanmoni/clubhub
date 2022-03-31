import {React,useState} from 'react';

const Profilesettings = (props) => {
    const [name,setName]=useState('John Doe')
    return (
    <div className="posts-container">
     <form>
    
     <label for="ProfileName">Name</label><br/><br/>
    <input type="text" id="ProfileName" name="profileName" placeholder={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
    <label for="Branch">Branch</label><br/><br/>
    <select>
        <option>MCA</option>
        <option>CSE</option>
        <option>CE</option>
    </select><br/><br/>
    
    
  
    <input className='form-submit-button' type="submit" value="Submit"/>
    </form>
    </div>
    );
}

export default Profilesettings;
