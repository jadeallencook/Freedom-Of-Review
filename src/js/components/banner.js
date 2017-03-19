// import react frameworks
import React, {Component} from 'react';

// import css
import '../../css/components/banner.css';

// btns
class BannerBtns extends Component {
    render() {
        return (
            <div id="banner-btns-container">
                <div id="banner-left-btns-container">
                    <a href="/#/offices"><div>Offices</div></a>
                    <a href="/#/police"><div>Police</div></a>
                    <a href="/#/officials"><div>Officials</div></a>
                </div>
                <div id="banner-right-btns-container">
                    <a href="/#/signup"><div id="signup-banner-btn">Signup</div></a>
                    <a href="/#/login"><div id="login-banner-btn">Login</div></a>
                </div>
            </div>
        );
    }
}

// search
class BannerSearch extends Component {
    render() {
        return (
            <div id="banner-search-container">
              <h1>{this.props.title}</h1>
              <input id="search-by-name" placeholder="Offical Name" type="text" />
              <input id="search-by-badge" placeholder="Badge #" type="text" />
              <input id="banner-search-btn" type="submit" value="Search" />
              <span>Read and write reviews for your local police and publicaly elected officials!</span>
            </div>
        );
    }
}

// banner build
class Banner extends Component {
    render() {
        return (
            <div id="banner">
                <div id="banner-color-overlay">
                    <div id="banner-container">
                        <BannerBtns />
                        <BannerSearch title={this.props.settings.title} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
