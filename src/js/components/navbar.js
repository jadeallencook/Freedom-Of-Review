// import frameworks
import React, {Component} from 'react';
import * as firebase from 'firebase';

// import css
import '../../css/components/navbar.css';

class AuthBtns extends Component {
    render() {
        // signout of firebase
        function signout() {
            firebase.auth().signOut();
        }
        // check if use is signed in
        if (firebase.auth().currentUser) {
            return (
                <div id="navbar-right-btns-container">
                    <a href="/#/account">
                        <div id="account-banner-btn">Account</div>
                    </a>
                    <a href="/#/">
                        <div id="signout-banner-btn" onClick={signout}>Sign Out</div>
                    </a>
                </div>
            );
        } else {
            return (
                <div id="navbar-right-btns-container">
                    <a href="/#/login">
                        <div id="login-banner-btn">Login</div>
                    </a>
                    <a href="/#/signup">
                        <div id="signup-banner-btn">Sign Up</div>
                    </a>
                </div>
            );
        }
    }
}

// banner build
class Navbar extends Component {
    render() {
        return (
            <div id="navbar-btns-wrapper">
                <div id="navbar-btns-container">
                    <div id="navbar-left-btns-container">
                        <a href="/#/">
                            <div>Home</div>
                        </a>
                        <a href="/#/offices">
                            <div>Offices</div>
                        </a>
                        <a href="/#/police">
                            <div>Police</div>
                        </a>
                        <a href="/#/officials">
                            <div>Officials</div>
                        </a>
                    </div>
                    <AuthBtns/>
                </div>
            </div>
        );
    }
}

export default Navbar;
