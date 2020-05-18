import React from 'react';

const Nav = (props) => {

    return (
        <header className="navbar fixed-top navbar-light">
            <a className="navbar-brand" href="/">
                <img src={require("../img/logo.png")} alt="Channel Hue logo" />
            </a>
            <button onClick={props.showRed}>Red</button>
        </header>
    )
}

export default Nav