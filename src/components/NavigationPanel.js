import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {logout} from '../redux/action/authActions'
import {useNavigate} from 'react-router-dom'
import {FaUserTie} from 'react-icons/fa'

function NavigationPanel(props) {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/post')
  }
  const callLogout = ()=> {
    props.logout()
  }

  const user = props.auth.user
  return (
    <div className="navigation-panel">
    <FaUserTie className="logo-main"/>
    <h2>{user.name}</h2> {/*Replace with props.Name */}
    <h3>Dept: {user.dept}</h3> {/*Replace with props.Description */}
    <div className="navigation-buttons">
    <div className="navigation-panel-button">Interested Groups <img className="icons" src={require("../assets/group.PNG")}/></div>
    <div className="navigation-panel-button">View All Groups <img className="icons" src={require("../assets/group_all.png")}/></div>
    <div className="navigation-panel-button">Account Settings  <img className="icons" src={require("../assets/settings.png")}/></div>
    {user.roles.club_admin && (<div className="navigation-panel-button" onClick={handleClick}>Post Event</div>)}
    <div className="navigation-panel-button" onClick={callLogout}>Logout</div>
    </div>
     
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
      logout
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(NavigationPanel)
