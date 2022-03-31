import React from 'react'
import '../App.css';

export default function Header() {
  return (
    <header className="header">
       <img className="header-icon" src={require("./logo.png")} alt="Logo"></img>
        <p>ClubHouse</p>
    </header>
  )
};