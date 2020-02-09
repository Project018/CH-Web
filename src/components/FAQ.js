import React, { Component, Fragment } from 'react';
import './FAQ.css';


class FAQ extends Component {
  render() {
      return (
        <Fragment>
            <nav className="navbar fixed-top navbar-light">
                <a className="navbar-brand" href="/">
                    <img src={require("../img/logo.png")} alt="Channel Hue logo" />
                </a>
            </nav>
            <main role="main">
                <section className="container">
                    <h1 className="mb-30">FAQ</h1>
                    <div className="mb-3">
                        <h3>What does the text on the color card mean?</h3>
                        <p>The verbiage you see is the color detail. The first line of text is the color name. Under each color name are the hexcodes. These codes are commonly used for web graphics so that computers can interpret and display the proper color.  </p>
                    </div>
                    <div className="mb-3">
                        <h3>Where & when can I use these colors?</h3>
                        <p>Anytime. These colors are at your disposal. Use them for designing websites, cover art, clothing, graphics, stickers, and more. To copy, just click/tap on the color card you want to use and paste it into your color picker.</p>
                    </div>
                    <div className="mb-3">
                        <h3>Best ways to find colors on the site?</h3>
                        <p>You can search colors by name, hexcode, and/or tags.</p>
                    </div>
                    <div className="mb-3">
                        <h3>Are the brand & school web colors official?</h3>
                        <p>Yes. The official brand guidelines for each color listed on the app.</p>
                    </div>
                    <div>
                        <h3>Will you be adding more colors?</h3>
                        <p>Yes. We will be updating the app with new colors periodically. Follow our Twitter <a href="http://www.twitter.com/htmlsportsdad" target="_blank" rel="noopener noreferrer">@htmlsportsdad</a> for announcements and more.</p>
                    </div>
                </section>
            </main>
        </Fragment>
        );
    }
}

export default FAQ;