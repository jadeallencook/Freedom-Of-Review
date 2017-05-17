// import frameworks
import React, {Component} from 'react';
import YellowPages from 'yellowpages';

// import css
import '../../css/components/offices.css';

// import components
import Navbar from '../../js/components/navbar.js';
import AddContent from '../../js/components/add-content.js';

// login page build
class App extends Component {
    render() {
        YellowPages.search({
            term: 'government',
            location: '48708'
        }, function(result) {
            console.log(result);
        });
        // cache offices
        let offices = this.props.offices;
        return (
            <div id="offices-page">
                <Navbar/>
                <div id="search-container">
                    <input type="text" placeholder="Zipcode"/>
                    <input type="submit" value="Search"/>
                </div>
                <div id="offices-list">
                    {offices.map(office => (
                        <div key={office.name} className="office-container">
                            <div className="office-row office-name">{office.name}</div>
                            <div className="office-row office-street">{office.street}</div>
                            <div className="office-row office-state">{office.state}</div>
                            <div className="office-row office-zip">{office.zip}</div>
                            <div className="office-row office-website">{office.website}</div>
                        </div>
                    ))}
                </div>
                <AddContent form="offices"/>
            </div>
        );
    }
}

export default App;
