import React from 'react';
import ClipboardJS from 'clipboard';

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
            <div role="listitem" className="card" key={id}>
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

export default All;