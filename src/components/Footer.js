import React, { Component } from 'react';

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
                <p>Total colors: 342</p>
            </div>
            <div>
                <p className="copy-text">© 2020 Channel Hue. All Rights Reserved. Shaked and baked by <a href="https://www.deshaunlab.com" target="_blank" rel="noopener noreferrer">DeShaun</a></p>
            </div>
        </footer>
    );
  }
}

export default Footer;