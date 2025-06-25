import React from "react";
import "./Colors.css";
import Input from "../../components/Input";
const Colors = ({ handleChange }) => {
  return (
    <div className="color-slidber">
      <h2 className="color-title slidber-title">Colors</h2>
  
      <Input
        handleChange={handleChange}
        value=""
        title="All"
        name="test3"
        colour="black"
      />
      
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test3"
        colour="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test3"
        colour="blue"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test3"
        colour="green"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test3"
        colour="red"
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="white"
        name="test3"
        colour="white"
      />
    </div>
  );
};

export default Colors;
