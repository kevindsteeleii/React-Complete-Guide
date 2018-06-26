import React from 'react';
import "./User.css";

const UserOutput = (props) => {
    return (
        <div className="User">
            <p><b>{props.name}</b>, ipsum dolor sit amet consectetur adipisicing elit. At, in nobis numquam aliquam fuga dolores suscipit dolor pariatur et. Corporis vel voluptatem repellat dolorem ad illum consectetur suscipit, dolorum esse.</p>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis repellat aliquam officiis beatae rem dolorum velit tempora accusantium deserunt vero?</p>
        </div>
    );
};
    
export default UserOutput;