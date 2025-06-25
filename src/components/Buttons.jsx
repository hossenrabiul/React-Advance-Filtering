import React from 'react';

const Buttons = ({onclickHandler, value, title}) => {
    return (
        <div>
            <button className="recomended-btns" onClick={onclickHandler} value={value}>{title}</button>
        </div>
    );
};

export default Buttons;