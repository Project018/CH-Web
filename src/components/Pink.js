import React from "react";

// Pink Colors Component
const Pink = (props) => {
    const colorDetails = props.colorDetails;
    const pinkOnly = colorDetails.filter(color => color.category.includes('Pink'))

    return (
        pinkOnly.map(({id, backgroundColor, name, hexcode, category, color}) => (
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

export default Pink;