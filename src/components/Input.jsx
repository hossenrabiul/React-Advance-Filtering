import React from "react";

const Input = ({handleChange, value, title, name, colour}) => {
  console.log(colour)
  return (
    <div>
      <label className="slidber-label-container">
        <input onChange={handleChange} value={value} type="radio" name={name} id="" />
        <span className="checkout" style={{backgroundColor:{colour}}}></span>{title}
      </label>
    </div>
  );
};

export default Input;
