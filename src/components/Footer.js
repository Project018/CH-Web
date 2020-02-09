import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


class Footer extends Component {
  render() {
    return (
        <footer className="card-footer text-muted footer mt-auto py-3">
            <div>
                <h5 className="about">About</h5>
                <p>Channel Hue is a digital crayon box that provides you with web colors to advance your creative work flow. Channel Hue was made for everyone with the philosophy of simplicity, utility, and community. Our current collection consists of web, flat, brand, and university colors.</p>
            </div>
            <div>
                <ul className="list-inline">
                    <li><Link to="/faq">FAQ</Link></li>          
                    <li><a href="mailto:info@channelhue.com">Contact</a></li>
                    <li><a href="https://twitter.com/HTMLSportsDad">Twitter</a></li>
                </ul>
                
            </div>
            <div>
                <p className="copy-text">© 2019 Channel Hue. All Rights Reserved. Shaked and baked by <a href="https://www.deshaunlab.com" target="_blank" rel="noopener noreferrer">DeShaun</a></p>
            </div>
        </footer>
    );
  }
}

export default Footer;