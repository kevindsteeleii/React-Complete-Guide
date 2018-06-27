import React from 'react';
const ValidationComponent = (props) => {
    let message = props.inputLength > 5?'Text too long' : 'Text too short';
    
    return (
        <div>
            {/* <h1>Test ValidationComponent </h1> */}
            <p>{message}</p>
        </div>
    );
};
export default ValidationComponent;