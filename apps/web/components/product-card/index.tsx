import React from "react";
import Image from "next/image";
import {product_1} from "../../assests";
import {FaEye} from "react-icons/fa";

interface Props {
  alt?: boolean;
}

export const ProductCard: React.FC<Props> = ({alt}) => {
  return (
    <div className={`product-card ${alt ? "alt" : "none"}`}>
      <Image src={product_1} alt="null" className="product-card-img" />
      <div className="product-card-info">
        <h3 className="product-card-title">Mac Book pro 2021</h3>
        <p className="product-card-summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          corrupti aut mollitia magni reprehenderit tempora eligendi veritatis.
          Velit ipsam, repudiandae iusto eius cum beatae!
        </p>
        <div style={{flexGrow: 1}}></div>
        <div className="product-card-bottom">
          <h4 className="product-card-price">
            <span className="sign">$</span>2200
          </h4>
          <button className="btn--primary">
            <span className="btn-label">View</span>
            <FaEye />
          </button>
        </div>
      </div>
    </div>
  );
};
