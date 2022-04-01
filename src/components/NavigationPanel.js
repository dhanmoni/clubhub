import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {logout} from '../redux/action/authActions'
import {useNavigate} from 'react-router-dom'
import {FaUserTie} from 'react-icons/fa'
import {MdGroupOff,MdGroup,MdPostAdd, MdLogout } from 'react-icons/md'
import {FaUserCog} from 'react-icons/fa'

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
    <h2>{user.name}</h2>
    {user.roles.club_admin && (<h2>Admin: {user.managingClub}</h2>)}
    <h3>Dept: {user.dept}</h3>
    <div className="navigation-buttons">
    <div className="navigation-panel-button">Interested Groups <MdGroup className="icons" color="#fff"/></div>
    <div className="navigation-panel-button">View All Groups <MdGroupOff className="icons" color="#fff"/></div>
    <div className="navigation-panel-button">Account Settings  <FaUserCog className="icons" color="#fff"/></div>
    {user.roles.club_admin && (<div className="navigation-panel-button" onClick={handleClick}>Post Event <MdPostAdd className="icons" color="#fff"/></div>)}
    <div className="navigation-panel-button" onClick={callLogout}>Logout <MdLogout className="icons" color="#fff"/></div>
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
