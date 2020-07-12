import React from 'react';

const Header = (props) => {

    return (
        <header className="navbar fixed-top navbar-light">
            <a className="navbar-brand" href="/">
                <img src={require("../img/logo.png")} alt="Channel Hue logo" />
            </a>
            <p role="contentinfo">Total Colors: 363</p>
        </header>
    )
}

export default Header