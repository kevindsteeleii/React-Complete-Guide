import React from 'react';
import "./User.css";

const UserInput = (props) => {
    return (
        <div className="User">
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};
    
export default UserInput;