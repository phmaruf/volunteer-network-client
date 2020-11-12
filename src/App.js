import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import All from './components/All/All';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {loggedInUser.name &&<p>User Name: {loggedInUser.name}</p>}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/register/:id">
            <Register></Register>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/all">
            <All></All>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
