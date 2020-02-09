import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    searchHandler(event){
        this.setState({filter: event.target.value})
    }

    render() {
    const filter = this.props.filter;
    const colorDetails  = this.props.colorDetails;
    console.log(colorDetails);
    console.log(this.props)
    return (
        <nav className="navbar fixed-top navbar-light">
            <a className="navbar-brand" href="/">
                <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
            Fixed top
            </a>
            <input type="text"
                onChange={(e) => this.searchHandler(e)}
                value={filter}
            />
            
            {/* <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-link" href="#">Blue</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Red</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Green</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Orange</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Purple</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Yellow</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pink</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Brown</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Black</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">White</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Gray</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Brand</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">School</a>
                </li>
            </ul> */}
        </nav>
    );
  }
}

export default Header;