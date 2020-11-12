import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../pics/logos/Group 1329.png';
import './Login.css';


const Login = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/register" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            storeAuthToken();
            
            }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
          
    }

    return (
        <div className="text-center login-body">
            <div>
                <a class="navbar-brand mb-5" href="#">
                        <img style={{height: '50px'}} src={logo} alt=""/>
                </a>
            </div>
            <div class="login">
                <h4 className="mb-4">Login with</h4>
                <button class="btn btn-light login-button" onClick={handleGoogleSignIn}>Continue with Google</button>
                <p className="mt-3">Don't have an account? <a href="">Create an account</a> </p>
            </div>
        </div>
    );
};

export default Login;