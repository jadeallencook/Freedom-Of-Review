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

// cache settings data
fire.settings = {};
fire.settings.ref = fire.database.ref('settings');

// get settings from firebase and build app
fire.settings.ref.on('value', function(data) {
  // create router for pages
  function router(hash) {
    if (hash === '#/police') ReactDOM.render((<Police settings={data.val()} />), document.getElementById('app'));
    else if (hash === '#/officials') ReactDOM.render((<Officials settings={data.val()} />), document.getElementById('app'));
    else if (hash === '#/offices') ReactDOM.render((<Offices settings={data.val()} />), document.getElementById('app'));
    else if (hash === '#/login') ReactDOM.render((<Login settings={data.val()} />), document.getElementById('app'));
    else if (hash === '#/signup') ReactDOM.render((<Signup settings={data.val()} />), document.getElementById('app'));
    else ReactDOM.render((<Home settings={data.val()} />), document.getElementById('app'));
  }
  // listen for page changes
  window.addEventListener('hashchange',function(event){
		router(window.location.hash);
	});
  // init app build based off of hash
  router(window.location.hash);
});
