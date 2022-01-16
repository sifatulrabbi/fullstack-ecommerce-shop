import React from "react";

export const ProductCard: React.FC = () => {
  return (
    <div className="product-card">
      <img src="/null" alt="null" className="product-card-img" />
      <div className="product-card-info">
        <h3 className="header3">Mac Book pro 2021</h3>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          corrupti aut mollitia magni reprehenderit tempora eligendi veritatis.
          Velit ipsam, repudiandae iusto eius cum beatae!
        </p>
        <h4 className="header4">$ 2200</h4>
        <div className="product-card-bottom">
          <button className="btn--primary">Details</button>
          <button className="btn--secondary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
