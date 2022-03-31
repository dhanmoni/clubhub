import React from 'react'


export default function NavigationPanel(props) {
    const admin=false;
  return (
    <div className="navigation-panel">
    
    <img  className="logo-main" src={require("../assets/profile-picture.jpg")} alt="user Profile Picture"></img> {/*Replace with props.ProfilePictureUrl */}
    
    <h3>John Doe</h3> {/*Replace with props.Name */}
    <p>Web developer by heart </p> {/*Replace with props.Description */}
    <div className="navigation-buttons">
    <div className="navigation-panel-button">Interested Groups <img className="icons" src={require("../assets/group.PNG")}/></div>
     <div className="navigation-panel-button">View All Groups <img className="icons" src={require("../assets/group_all.png")}/></div>
     <div className="navigation-panel-button">Account Settings  <img className="icons" src={require("../assets/settings.png")}/></div>
     {admin? <div className="navigation-panel-button">Account Settings  <img className="icons" src={require("../assets/settings.png")}/></div>: <div></div>}
    </div>
     
    </div>
  )
}
