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

// main app build
class App extends Component {
    render() {
        // render homepage and pass it settings from firebase
        return (<Home settings={this.props.settings}/>);
    }
}

// get settings from firebase and build app
fire.settings.ref.on('value', function(data) {
  ReactDOM.render(
      <App settings={data.val()}/>, document.getElementById('app'));
});

export default App;
