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

// TODO: Search functionality
// function searchingFor(search) {
//     return function(x) {
//         return x.name.toLowerCase().includes(search.toLowerCase()) || x.hexcode.toLowerCase().includes(search.toLowerCase()) || x.category.toLowerCase().includes(search.toLowerCase()) || !search;
//     }
// }

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
                this.setState({ showAll: true, showRed: false, showBlue: false});
                break;
            case "Red":
                this.setState({ showRed: true, showAll: false, showBlue: false});
                break;
            case "Blue":
                this.setState({ showBlue: true, showAll: false, showRed: false});
                break;
            default: 
            console.log('nothing to show')
        }
    }

    // searchHandler(event){
    //     this.setState({search: event.target.value})
    // }

    render() {
        const {showAll, showRed, showBlue} = this.state;

        return (
            <Fragment>
                {/* <form className="container">
                    <input 
                        type="search"
                        className="form-control ds-input"
                        id="search-input"
                        placeholder="Search..."
                        onChange={(e) => this.searchHandler(e)}
                        value={this.state.search} 
                        spellCheck="false" 
                    />
                </form> */}
                <main role="main">
                    <div className="container">
                        <p>Total colors: 342</p>
                        <button onClick={() => this.buttonClick("All")}>All Colors</button> 
                        <button onClick={() => this.buttonClick("Red")}>Red</button>
                        <button onClick={() => this.buttonClick("Blue")}>Blue</button>
                    </div>

                    <div className="card-container">
                        {showAll && <All colorDetails={this.props.colorDetails} />}
                        {showRed && <Red colorDetails={this.props.colorDetails} />}
                        {showBlue && <Blue colorDetails={this.props.colorDetails} />}
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default Cards;