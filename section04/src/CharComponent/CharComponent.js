import React from 'react';
import './CharComponent.css'
 const CharComponent = (props) => {
    return(
        <div className="Char" onClick={props.click}>
            <h3>{props.letter}</h3>
            <p>Index at {props.index}</p>
        </div>
    );
 };

 export default CharComponent;