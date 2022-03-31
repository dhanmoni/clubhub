import React from 'react'
import '../App.css';
import {useNavigate} from 'react-router-dom'


export default function Header() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home')
  }
  return (
    <header className="header">
      <div onClick={handleClick} style={{display:'flex', flexDirection:'row'}}>
       <img className="header-icon" src={require("./logo.png")} alt="Logo"></img>
        <p>ClubHouse</p>
      </div>
    </header>
  )
};