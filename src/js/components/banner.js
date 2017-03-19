// import react frameworks
import React, {Component} from 'react';
import * as firebase from 'firebase';

// import css
import '../../css/components/banner.css';

class AuthBtns extends Component {
    render() {
        // signout of firebase
        function signout() {
            firebase.auth().signOut();
        }
        // check if use is signed in
        if (firebase.auth().currentUser) {
            return (
                <div id="banner-right-btns-container">
                    <a href="/#/">
                        <div id="signout-banner-btn" onClick={signout}>Sign Out</div>
                    </a>
                    <a href="/#/account">
                        <div id="login-banner-btn">Account</div>
                    </a>
                </div>
            );
        } else {
            return (
                <div id="banner-right-btns-container">
                    <a href="/#/signup">
                        <div id="signup-banner-btn">Sign Up</div>
                    </a>
                    <a href="/#/login">
                        <div id="login-banner-btn">Login</div>
                    </a>
                </div>
            );
        }
    }
}

// btns
class BannerBtns extends Component {
    render() {
        return (
            <div id="banner-btns-container">
                <div id="banner-left-btns-container">
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
        );
    }
}

// search
class BannerSearch extends Component {
    render() {
        return (
            <div id="banner-search-container">
                <h1>{this.props.title}</h1>
                <input id="search-by-name" placeholder="Official Name" type="text"/>
                <input id="search-by-badge" placeholder="Badge #" type="text"/>
                <input id="banner-search-btn" type="submit" value="Search"/>
                <span>Read and write reviews for your publicly elected officials!</span>
            </div>
        );
    }
}

// banner build
class Banner extends Component {
    render() {
        return (
            <div id="banner">
                <div id="banner-color-overlay">
                    <div id="banner-container">
                        <BannerBtns/>
                        <BannerSearch title={this.props.settings.title}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
