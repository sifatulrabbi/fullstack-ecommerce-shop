import React from "react";
import {mockProducts} from "./mockData";
import {ProductCard} from "../product-card";

export const ProductsSection: React.FC = () => {
  return (
    <section className="products-section">
      {mockProducts.map((product, index) => (
        <ProductCard
          key={product._id}
          product={product}
          alt={index % 2 === 0}
        />
      ))}
    </section>
  );
};
