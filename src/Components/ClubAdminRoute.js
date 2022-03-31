import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";


function ClubAdminRoute({ children, auth }) {
    return (auth.user.roles.club_admin || auth.user.roles.super_admin) ? children : <Navigate to="/home" />;
}

const mapStateToProp = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProp)(ClubAdminRoute);
