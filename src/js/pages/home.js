// import react framework
import React, { Component } from 'react';

// import needed components
import Banner from '../components/banner.js';

// export the homepage
class Home extends Component {
  render() {
    console.log(this.props);
    return(
      <Banner />
    );
  }
}

export default Home;
