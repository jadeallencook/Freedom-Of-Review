// import frameworks
import React, {Component} from 'react';

// import css
import '../../css/components/login.css';

// import components
import Navbar from '../../js/components/navbar.js';

// login page build
class Login extends Component {
  render() {
    return (
      <div id="login-page">
        <Navbar/>
        <h1>Login Page</h1>
      </div>
    );
  }
}

export default Login;
