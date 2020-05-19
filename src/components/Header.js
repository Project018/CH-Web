import React from 'react';

const Header = () => {

    return (
        <header className="navbar fixed-top navbar-light">
            <a className="navbar-brand" href="/">
                <img src={require("../img/logo.png")} alt="Channel Hue logo" />
            </a>
        </header>
    )
}

export default Header