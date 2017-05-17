// import react frameworks
import React, {Component} from 'react';

// import css
import '../../css/components/police.css';

// import components
import Navbar from '../../js/components/navbar.js';

// login page build
class Police extends Component {
    render() {
        return (
            <div id="police-page">
                <Navbar/>
                <h1>Police page</h1>
            </div>
        );
    }
}

export default Police;
