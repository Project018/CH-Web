import React, { Component, Fragment } from 'react';
import './Cards.css';

import All from './All';
import Red from './Red';
import Blue from './Blue';
import Green from './Green';
import Purple from './Purple';
import Orange from './Orange';
import Yellow from './Yellow';
import Pink from './Pink';
import Brown from './Brown';
import Gray from './Gray';
import Black from './Black';
import White from './White';
import Brand from './Brand';
import NBA from './NBA';
import School from './School';

class Cards extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            // show all on page load
            showAll: true,
            scrolling: false
        }

        this.buttonClick = this.buttonClick.bind(this)
    }  

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        // if no scroll set button to display none
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({scrolling: false}) 
        }
        // if scroll detected set button to display block
        else if (window.scrollY !== 0 && this.state.scrolling !== true) { 
            this.setState({scrolling: true})
        }
    }
    
    // Scroll to the top once click button
    ScrollTop = () => {
        if (window.scrollY > 30) {
            window.scrollTo({
                top: 0, 
                left: 0,
                behavior: "smooth"
            })
        }
    }
    
    // switch statment to render component based off button click
    buttonClick(color) {    
        switch (color) {
            case "All":
                this.setState({ showAll: true, showRed: false, showBlue: false, showGreen: false, showPurple: false, showOrange: false, showYellow: false, showPink: false, showBrown: false, showGray: false, showBlack: false, showWhite: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "Red":
                this.setState({ showRed: true, showAll: false, showBlue: false, showGreen: false, showPurple: false, showOrange: false, showYellow: false, showPink: false, showBrown: false, showGray: false, showBlack: false, showWhite: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "Blue":
                this.setState({ showBlue: true, showAll: false, showRed: false, showGreen: false, showPurple: false, showOrange: false, showYellow: false, showPink: false, showBrown: false, showGray: false, showBlack: false, showWhite: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "Green":
                this.setState({ showGreen: true, showRed: false, showBlue: false, showAll: false, showPurple: false, showOrange: false, showYellow: false, showPink: false, showBrown: false, showGray: false, showBlack: false, showWhite: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "Purple":
                this.setState({ showPurple: true, showAll: false, showBlue: false, showGreen: false, showRed: false, showOrange: false, showYellow: false, showPink: false, showBrown: false, showGray: false, showBlack: false, showWhite: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "Orange":
                this.setState({ showOrange: true, showAll: false, showRed: false, showGreen: false, showPurple: false, showBlue: false, showYellow: false, showPink: false, showBrown: false, showGray: false, showBlack: false, showWhite: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "Yellow":
                this.setState({ showYellow: true, showRed: false, showBlue: false, showGreen: false, showPurple: false, showOrange: false, showAll: false, showPink: false, showBrown: false, showGray: false, showBlack: false, showWhite: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "Pink":
                this.setState({ showPink: true, showAll: false, showBlue: false, showGreen: false, showPurple: false, showOrange: false, showYellow: false, showRed: false, showBrown: false, showGray: false, showBlack: false, showWhite: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "Brown":
                this.setState({ showBrown: true, showAll: false, showRed: false, showGreen: false, showPurple: false, showOrange: false, showYellow: false, showPink: false, showBlue: false, showGray: false, showBlack: false, showWhite: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "Gray":
                this.setState({ showGray: true, showRed: false, showBlue: false, showGreen: false, showPurple: false, showOrange: false, showYellow: false, showPink: false, showBrown: false, showAll: false, showBlack: false, showWhite: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "Black":
                this.setState({ showBlack: true, showAll: false, showBlue: false, showGreen: false, showPurple: false, showOrange: false, showYellow: false, showPink: false, showBrown: false, showGray: false, showRed: false, showWhite: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "White":
                this.setState({ showWhite: true, showAll: false, showRed: false, showGreen: false, showPurple: false, showOrange: false, showYellow: false, showPink: false, showBrown: false, showGray: false, showBlack: false, showBlue: false, showBrand: false, showNBA: false, showSchool: false });
                break;
            case "Brand":
                this.setState({ showBrand: true, showAll: false, showRed: false, showGreen: false, showPurple: false, showOrange: false, showYellow: false, showPink: false, showBrown: false, showGray: false, showBlack: false, showWhite: false, showBlue: false, showNBA: false, showSchool: false });
                break;
            case "NBA":
                this.setState({ showNBA: true, showAll: false, showRed: false, showGreen: false, showPurple: false, showOrange: false, showYellow: false, showPink: false, showBrown: false, showGray: false, showBlack: false, showWhite: false, showBrand: false, showBlue: false, showSchool: false });
                break;
            case "School":
                this.setState({ showSchool: true, showAll: false, showRed: false, showGreen: false, showPurple: false, showOrange: false, showYellow: false, showPink: false, showBrown: false, showGray: false, showBlack: false, showWhite: false, showBrand: false, showNBA: false, showBlue: false });
                break;
            default: 
            console.log('nothing to see')
        }
    }

    render() {
        const {showAll, showRed, showBlue, showGreen, showPurple, showOrange, showYellow, showPink, showBrown, showGray, showWhite, showBlack, showBrand, showNBA, showSchool} = this.state;

        return (
            <Fragment>
                <main>
                    <div role="toolbar" className="container _buttonGroup">
                        <button type="button" className={`btn ${showAll ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("All")}>All</button> 
                        <button type="button" className={`btn ${showRed ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("Red")}>Red</button>
                        <button type="button" className={`btn ${showBlue ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("Blue")}>Blue</button>
                        <button type="button" className={`btn ${showGreen ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("Green")}>Green</button> 
                        <button type="button" className={`btn ${showPurple ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("Purple")}>Purple</button>
                        <button type="button" className={`btn ${showOrange ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("Orange")}>Orange</button>
                        <button type="button" className={`btn ${showYellow ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("Yellow")}>Yellow</button>
                        <button type="button" className={`btn ${showPink ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("Pink")}>Pink</button> 
                        <button type="button" className={`btn ${showBrown ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("Brown")}>Brown</button>
                        <button type="button" className={`btn ${showGray ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("Gray")}>Gray</button> 
                        <button type="button" className={`btn ${showBlack ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("Black")}>Black</button>
                        <button type="button" className={`btn ${showWhite ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("White")}>White</button>
                        <button type="button" className={`btn ${showBrand ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("Brand")}>Brand</button> 
                        <button type="button" className={`btn ${showNBA ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("NBA")}>NBA</button>
                        <button type="button" className={`btn ${showSchool ? "btn-dark" : "btn-outline-dark"} -margin`} onClick={() => this.buttonClick("School")}>School</button>
                    </div>

                    <section role="list" className="card-container">
                        {showAll && <All colorDetails={this.props.colorDetails} />}
                        {showRed && <Red colorDetails={this.props.colorDetails} />}
                        {showBlue && <Blue colorDetails={this.props.colorDetails} />}
                        {showGreen && <Green colorDetails={this.props.colorDetails} />}
                        {showPurple && <Purple colorDetails={this.props.colorDetails} />}
                        {showOrange && <Orange colorDetails={this.props.colorDetails} />}
                        {showYellow && <Yellow colorDetails={this.props.colorDetails} />}
                        {showPink && <Pink colorDetails={this.props.colorDetails} />}
                        {showBrown && <Brown colorDetails={this.props.colorDetails} />}
                        {showGray && <Gray colorDetails={this.props.colorDetails} />}
                        {showWhite && <White colorDetails={this.props.colorDetails} />}
                        {showBlack && <Black colorDetails={this.props.colorDetails} />}
                        {showBrand && <Brand colorDetails={this.props.colorDetails} />}
                        {showNBA && <NBA colorDetails={this.props.colorDetails} />}
                        {showSchool && <School colorDetails={this.props.colorDetails} />}
                    </section>

                    <button className="toTheTop" style={{display: this.state.scrolling ? "flex" : "none"}} onClick={() => this.ScrollTop()}>
                    <i className="fas fa-arrow-up"></i>
                        Top
                    </button>                    
                </main>
            </Fragment>
        );
    }
}

export default Cards;