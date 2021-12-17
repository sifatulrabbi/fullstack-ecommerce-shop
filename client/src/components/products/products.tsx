import React from 'react';
import { ProductsContainer } from './products.styles';
import { ProductCard } from '../product-card/product-card';
import { IProduct } from '../../typings';

interface Props {
  products: IProduct[];
}

export function Products({ products }: Props): React.ReactElement {
  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          name={product.name}
          desc={product.desc}
          price={product.price}
          img={product.img}
        />
      ))}
    </ProductsContainer>
  );
}
