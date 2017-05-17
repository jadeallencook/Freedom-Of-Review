// import react frameworks
import React, {Component} from 'react';

// import css
import '../../css/components/officials.css';

// import components
import Navbar from '../../js/components/navbar.js';

// login page build
class Officials extends Component {
    render() {
        return (
            <div id="officials-page">
                <Navbar/>
                <h1>Officials page</h1>
            </div>
        );
    }
}

export default Officials;
