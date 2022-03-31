import React from 'react'
import Vector from "../assets/vector.png";
import Vector1 from "../assets/LandingHeroBg.png";
import { Link } from 'react-router-dom';

function LandingPage() {
  const myStyle = {
    backgroundColor: 'DodgerBlue'
  };
  return (
      <div className="container" style={myStyle}>

          <div className="landingpage">
            <h1>Welcome to ClubHub</h1>
            <div>
            <button>Sign In</button>
            <button>Sign Out</button>
            </div>
           

            <h3>We bring in all the clubs of your college together</h3>
            <Link to="/" className="developers">
              Know More about the developers
            </Link>
          </div>
          <div className="col-lg-6">
            <img className="w-100" src={Vector} alt="vector" />
          </div>

      </div>
  )
}

export default LandingPage