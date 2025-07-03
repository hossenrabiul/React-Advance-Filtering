import React from "react";
import "./Category.css";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  return (
    <div>
      <div className="slidber-title">All Category</div>

      <Input
        handleChange={handleChange}
        value=""
        title="All"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="falts"
        title="Falts"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="sendle"
        title="Sendle"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="slipper"
        title="Slipper"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="shoes"
        title="Shoes"
        name="test"
      />
    </div>
  );
};

export default Category;
