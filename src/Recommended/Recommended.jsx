import React from "react";
import "./Recommended.css";
import Buttons from "../components/Buttons";
const Recommended = ({ handleClick }) => {
  return (
    <div>
      <h1 className="recommended-title">Recommended</h1>
      <div className="recomended-flex">
        <Buttons
          onclickHandler={handleClick}
          
          value=""
          title="All"
        ></Buttons>

        <Buttons
          onclickHandler={handleClick}
          className="recomended-btns"
          value="nike"
          title="Nike"
        ></Buttons>
        <Buttons
          onclickHandler={handleClick}
          className="recomended-btns"
          value="adidas"
          title="Adidas"
        ></Buttons>
        <Buttons
          onclickHandler={handleClick}
          className="recomended-btns"
          value="vans"
          title="Vans"
        ></Buttons>
      </div>
    </div>
  );
};

export default Recommended;
