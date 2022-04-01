import React from 'react'
import '../styles/header.css';
import {useNavigate} from 'react-router-dom'


export default function Header() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home')
  }
  return (
    <header className="header">
      <div onClick={handleClick} style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
       <img className="header-icon" src={require("../assets/logo.png")} alt="Logo"></img>
        <p>ClubHub</p>
      </div>
    </header>
  )
};