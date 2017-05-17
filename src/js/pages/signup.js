// import frameworks
import React, {Component} from 'react';
import * as firebase from 'firebase';

// import components
import Navbar from '../../js/components/navbar.js';

// import css
import '../../css/components/signup.css';

// signup form
class SignupForm extends Component {
    render() {
        // signup new user w/ firebase
        function signupUser() {
            // get email and password from inputs
            let email = document.getElementById('signup-email').value,
                $email = document.getElementById('signup-email'),
                password = document.getElementById('signup-password').value,
                $password = document.getElementById('signup-password');
            // reset the ui
            $email.style.border = 'none';
            $password.style.border = 'none';
            // connection to firebase auth
            const auth = firebase.auth();
            auth.createUserWithEmailAndPassword(email, password).then(function(user) {
                // return to homepage
                window.location.hash = '#/';
            }).catch(function(error) {
                // handle errors
                if (error.code === 'auth/weak-password') {
                    // style the password box and check placeholder message
                    $password.style.border = 'solid red thin';
                    $password.value = '';
                    $password.placeholder = 'Weak password, try again';
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
        // build the form
        return (
            <div id="signup-form">
                <h1>Sign Up</h1>
                <input type="text" id="signup-email" placeholder="Email"/><br/>
                <input type="password" id="signup-password" placeholder="Password"/><br/>
                <input type="submit" onClick={signupUser} value="Sign Up"/>
            </div>
        );
    }
}

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

class Signup extends Component {
    render() {
        // check if use is signed in
        let auth = firebase.auth().currentUser;
        // make layout based off of auth
        if (auth) {
            return (
                <div id="signup-page">
                    <Navbar/>
                    <AlreadySignedIn/>
                </div>
            );
        } else {
            return (
                <div id="signup-page">
                    <Navbar/>
                    <SignupForm/>
                </div>
            );
        }
    }
}

export default Signup;
