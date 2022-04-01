
import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import LandingPage from './Pages/LandingPage';
import HomeScreen from './Pages/HomeScreen';
import AdminScreen from './Pages/AdminScreen';
import PrivateRoute from './Components/PrivateRoute';
import ClubAdminRoute from './Components/ClubAdminRoute';
import SuperAdminRoute from './Components/SuperAdminRoute';
import PostScreen from './Pages/PostScreen';


const App = () => {
  
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route
            exact
            path="home"
            element={
              <PrivateRoute>
                <HomeScreen />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="admin"
            element={
              <SuperAdminRoute>
                <AdminScreen />
              </SuperAdminRoute>
            }
          />
          <Route
            exact
            path="post"
            element={
              <ClubAdminRoute>
                <PostScreen />
              </ClubAdminRoute>
            }
          />

        </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>

  );
};

export default App;
