// import react frameworks
import React, { Component } from 'react';

// import css
import '../../css/components/banner.css';

// create component
class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <h1>{this.props.settings.title}</h1>
      </div>
    );
  }
}

export default Banner;
