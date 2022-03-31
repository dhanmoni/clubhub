import React from 'react'
import Vector from "../assets/LandingHeroVector.png";
import Vector1 from "../assets/LandingHeroBg.png";
import { Link } from 'react-router-dom';

function LandingPage() {
  const myStyle = {
    height: '100vh',
    backgroundImage: `url(${Vector1})`,
    backgroundSize: 'cover'
  };
  return (
      <div className="container" style={myStyle}>
        <div>
          <div className="col-lg-6 mt-xl-5 pt-5">
            <h1>Welcome to ClubHub</h1>
            <div>
            <button>Sign In</button>
            <button>Sign Out</button>
            </div>
           

            <h3>We bring in all the clubs of your college together</h3>
            <p className="blockquote py-4">
              
            </p>
            <Link to="/" className="btn btn-primary mr-3">
              Know More about the developers
            </Link>
          </div>
          <div className="col-lg-6">
            <img className="w-100" src={Vector} alt="vector" />
          </div>
        </div>
      </div>
  )
}

export default LandingPage