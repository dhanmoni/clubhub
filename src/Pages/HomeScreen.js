import React from 'react'
import '../App.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import MainLayout from '../Components/MainLayout';

function HomeScreen() {
  return (
    <div>
        <div>
        <Header/>
        <MainLayout/>
        <Footer/>
   </div>
    </div>
  )
}

export default HomeScreen