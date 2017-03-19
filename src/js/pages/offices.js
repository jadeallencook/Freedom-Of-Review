// import react frameworks
import React, {Component} from 'react';

// import css
import '../../css/components/offices.css';

// import components
import Navbar from '../../js/components/navbar.js';

// login page build
class Offices extends Component {
    render() {
        // cache offices
        let offices = this.props.offices;
        return (
            <div id="offices-page">
                <Navbar/>
                {offices.map(office => (
                    <h1 key={office.name}>{office.name}</h1>
                ))}
            </div>
        );
    }
}

export default Offices;
