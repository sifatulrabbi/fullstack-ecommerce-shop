import React from "react";
import Link from "next/link";
import Image from "next/image";
import {FaEye} from "react-icons/fa";

interface Props {
  product: {
    img: any;
    name: string;
    summary: string;
    price: number;
    _id: string;
  };
  alt?: boolean;
}

export const ProductCard: React.FC<Props> = ({product, alt}) => {
  return (
    <div className={`product-card ${alt ? "alt" : "none"}`}>
      <Image
        src={product.img}
        alt="null"
        height={540}
        width={720}
        className="product-card-img"
      />
      <div className="product-card-info">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-summary">{product.summary}</p>
        <div style={{flexGrow: 1}} />
        <div className="product-card-bottom">
          <h4 className="product-card-price">
            <span className="sign">$</span>
            {product.price}
          </h4>
          <Link href={`/products/${product._id}`} passHref={true}>
            <button className="btn--primary">
              <span className="btn-label">View</span>
              <FaEye />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
