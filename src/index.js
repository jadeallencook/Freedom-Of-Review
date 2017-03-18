// import dependencies
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

// main css
import './css/normalize.css';
import './css/base.css';

// import pages for routes
import Home from './js/pages/home.js';

// create firebase {} && cache config
let fire = {};
fire.config = {
    apiKey: "AIzaSyCuJveVulLMTP2HOm1XFiLDjCHo2EOHDbM",
    authDomain: "freedom-of-review.firebaseapp.com",
    databaseURL: "https://freedom-of-review.firebaseio.com",
    storageBucket: "freedom-of-review.appspot.com",
    messagingSenderId: "676763741871"
};

// init firebase connection
firebase.initializeApp(fire.config);
fire.database = firebase.database();

// cache settings data
fire.settings = {};
fire.settings.ref = fire.database.ref('settings');
fire.settings.snap = {};

// snapshot settings data
fire.settings.ref.once('value').then(function(snapshot) {
    fire.settings.snap.title = snapshot.child('title').val();
    fire.settings.snap.email = snapshot.child('email').val();
    fire.settings.snap.url = snapshot.child('url').val();
});

// main app build
class App extends Component {
    constructor() {
        super();
        this.state = {
          title: fire.settings.snap.title
        };
        console.log(fire.settings.snap.email);
    }
    render() {
        return (<Home title={this.state.title}  />);
    }
}

export default App;

// init render
ReactDOM.render(
    <App/>, document.getElementById('app'));
