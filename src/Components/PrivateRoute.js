import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";


function PrivateRoute({ children, auth }) {
    return auth.isAuthenticated ? children : <Navigate to="/" />;
}

const mapStateToProp = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProp)(PrivateRoute);
