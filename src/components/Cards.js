import React, { Component, Fragment } from 'react';
import ClipboardJS from 'clipboard';
import './Cards.css';

// Using clipboard package to create copy on click functionality
const clipboard = new ClipboardJS('.card-body');
clipboard.on('success', function(e) {
    const copy = e.trigger.querySelector(".copied");
    const parent = copy.parentElement;
    copy.classList.add("copy-tooltip");
    parent.addEventListener("mouseleave", () => {
        copy.classList.remove("copy-tooltip");
    });
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

function shuffleColors(array) {
    // Shuffle through objects in array 
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // Display 50 colors
    // const copy = array.slice(0, 80)
    // return copy;

    return array
}

// All Colors Component
const All = (props) => {
    const colorDetails  = props.colorDetails;
    const shuffledCards = shuffleColors(colorDetails);

    return (
       shuffledCards.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// Red Colors Component
const Red = (props) => {
    const colorDetails = props.colorDetails;
    const redOnly = colorDetails.filter(color => color.category.includes('Red'))

    return (
        redOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// Blue Colors Component
const Blue = (props) => {
    const colorDetails = props.colorDetails;
    const blueOnly = colorDetails.filter(color => color.category.includes('Blue'))

    return (
        blueOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// Green Colors Component
const Green = (props) => {
    const colorDetails = props.colorDetails;
    const greenOnly = colorDetails.filter(color => color.category.includes('Green'))

    return (
        greenOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// Purple Colors Component
const Purple = (props) => {
    const colorDetails = props.colorDetails;
    const purpleOnly = colorDetails.filter(color => color.category.includes('Purple'))

    return (
        purpleOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// Orange Colors Component
const Orange = (props) => {
    const colorDetails = props.colorDetails;
    const orangeOnly = colorDetails.filter(color => color.category.includes('Orange'))

    return (
        orangeOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// Yellow Colors Component
const Yellow = (props) => {
    const colorDetails = props.colorDetails;
    const yellowOnly = colorDetails.filter(color => color.category.includes('Yellow'))

    return (
        yellowOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// Pink Colors Component
const Pink = (props) => {
    const colorDetails = props.colorDetails;
    const pinkOnly = colorDetails.filter(color => color.category.includes('Pink'))

    return (
        pinkOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// Brown Colors Component
const Brown = (props) => {
    const colorDetails = props.colorDetails;
    const brownOnly = colorDetails.filter(color => color.category.includes('Brown'))

    return (
        brownOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// Gray Colors Component
const Gray = (props) => {
    const colorDetails = props.colorDetails;
    const grayOnly = colorDetails.filter(color => color.category.includes('Gray'))

    return (
        grayOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// Black Colors Component
const Black = (props) => {
    const colorDetails = props.colorDetails;
    const blackOnly = colorDetails.filter(color => color.category.includes('Black'))

    return (
        blackOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// White Colors Component
const White = (props) => {
    const colorDetails = props.colorDetails;
    const whiteOnly = colorDetails.filter(color => color.category.includes('White'))

    return (
        whiteOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// Brand Colors Component
const Brand = (props) => {
    const colorDetails = props.colorDetails;
    const brandOnly = colorDetails.filter(color => color.category.includes('Brand'))

    return (
        brandOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// NBA Colors Component
const NBA = (props) => {
    const colorDetails = props.colorDetails;
    const nbaOnly = colorDetails.filter(color => color.category.includes('NBA'))

    return (
        nbaOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}

// School Colors Component
const School = (props) => {
    const colorDetails = props.colorDetails;
    const schoolOnly = colorDetails.filter(color => color.category.includes('School'))

    return (
        schoolOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
            <div className="card" key={id}>
                <div className="card-body" style={Object.assign({backgroundColor}, {color})} data-clipboard-text={hexcode} title="Click to copy color hexcode">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2">{hexcode}</h6>
                    <p className="card-text">Tags: {category}</p>
                    <div className="copied">Copied!</div>
                </div>
            </div>
        ))
    )
}


class Cards extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            search: '',
            showAll: true,
            showRed: false,
            showBlue: false
        }

        this.buttonClick = this.buttonClick.bind(this)
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
            console.log('nothing to show')
        }
    }

    render() {
        const {showAll, showRed, showBlue, showGreen, showPurple, showOrange, showYellow, showPink, showBrown, showGray, showWhite, showBlack, showBrand, showNBA, showSchool} = this.state;

        return (
            <Fragment>
                <main role="main">
                    <div className="container _buttonGroup">
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

                    <div className="card-container">
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
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default Cards;