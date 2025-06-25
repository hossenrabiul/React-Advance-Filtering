import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({img,title,newPrice, prevPrice, rating }) => {
 
  return (
    <div>
      <section className="card">
        <img
        style={{width:150, height:150, background:"transparent"}}
    
          src={img}
          alt=""
        />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            <AiFillStar className="reviews" />{" "}
            <AiFillStar className="reviews" />{" "}
            <AiFillStar className="reviews" />{" "}
            <AiFillStar className="reviews" />
            <span className="total-reviews">{rating}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del className="del">${prevPrice}</del> ${newPrice}
            </div>

            <div>
              <BsFillBagHeartFill></BsFillBagHeartFill>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Card;
