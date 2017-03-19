// import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

// main css
import './css/normalize.css';
import './css/base.css';

// import pages for routes
import Home from './js/pages/home.js';
import Login from './js/pages/login.js';
import Signup from './js/pages/signup.js';
import Police from './js/pages/police.js';
import Officials from './js/pages/officials.js';
import Offices from './js/pages/offices.js';

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

// cache firebase data
fire.settings = {
  ref: fire.database.ref('settings')
};
fire.offices = {
  ref: fire.database.ref('offices')
};

// get settings from firebase and build app
fire.settings.ref.on('value', function(settings) {
    // create router for pages
    function router(hash) {
        if (hash === '#/police') {
            ReactDOM.render((<Police settings={settings.val()}/>), document.getElementById('app'));
        } else if (hash === '#/officials') {
            ReactDOM.render((<Officials settings={settings.val()}/>), document.getElementById('app'));
        } else if (hash === '#/offices') {
          fire.offices.ref.on('value', function(offices) {
            ReactDOM.render((<Offices settings={settings.val()} offices={offices.val()} />), document.getElementById('app'));
          });
        } else if (hash === '#/login') {
            ReactDOM.render((<Login settings={settings.val()}/>), document.getElementById('app'));
        } else if (hash === '#/signup') {
            ReactDOM.render((<Signup settings={settings.val()}/>), document.getElementById('app'));
        } else {
            ReactDOM.render((<Home settings={settings.val()}/>), document.getElementById('app'));
        }
    }
    // listen for page changes
    window.addEventListener('hashchange', function(event) {
        router(window.location.hash);
    });
    // init app build based off of hash
    router(window.location.hash);
});
