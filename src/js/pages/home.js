// import react framework
import React, {Component} from 'react';

// import needed components
import Banner from '../components/banner.js';

// export the homepage
class Home extends Component {
    render() {
        // build banner with firebase settings 
        return (<Banner settings={this.props.settings}/>);
    }
}

export default Home;
