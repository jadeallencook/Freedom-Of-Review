// import frameworks
import React, {Component} from 'react';
import * as firebase from 'firebase';

// import components
import Navbar from '../../js/components/navbar.js';

// import css
import '../../css/components/login.css';

// form is someone is already logged in
class AlreadySignedIn extends Component {
    render() {
        // signout of firebase
        function signout() {
            firebase.auth().signOut();
        }
        // build the form
        return (
            <div id="signup-form">
                <h1>You're already signed in!</h1>
                <a onClick={signout} href="/#/">Click here to signout</a>
            </div>
        );
    }
}

// login page build
class Login extends Component {
    render() {
        // firebase login
        function login() {
            // get email and password from inputs
            let email = document.getElementById('login-email').value,
                $email = document.getElementById('login-email'),
                password = document.getElementById('login-password').value,
                $password = document.getElementById('login-password');
            // reset the ui
            $email.style.border = 'none';
            $password.style.border = 'none';
            // connection to firebase auth
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
                // return to homepage
                window.location.hash = '#/';
            }).catch(function(error) {
                // handle errors
                if (error.code === 'auth/wrong-password') {
                    // style the password box and check placeholder message
                    $password.style.border = 'solid red thin';
                    $password.value = '';
                    $password.placeholder = 'Wrong password, try again';
                } else if (error.code === 'auth/invalid-email') {
                    // style the email box and check placeholder message
                    $email.style.border = 'solid red thin';
                    $email.value = '';
                    $email.placeholder = 'Bad email, try again';
                } else {
                    console.log(error);
                }
            });
        }
        // check if use is signed in
        let auth = firebase.auth().currentUser;
        // make layout based off of auth
        if (auth) {
            return (
                <div id="login-page">
                    <Navbar/>
                    <h1>You're Already Logged In!</h1>
                    <AlreadySignedIn/>
                </div>
            );
        } else {
            return (
                <div id="login-page">
                    <Navbar/>
                    <div id="signup-form">
                        <h1>Login</h1>
                        <input type="text" id="login-email" placeholder="Email"/><br/>
                        <input type="password" id="login-password" placeholder="Password"/><br/>
                        <input type="submit" onClick={login} value="Login"/>
                    </div>
                </div>
            );
        }
    }
}

export default Login;
