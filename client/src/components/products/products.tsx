import React from 'react';
import { ProductsContainer } from './products.styles';
import { Product } from '../product/product';
import { IProduct } from '../../typings';

interface Props {
  products: IProduct[];
}

export function Products({ products }: Props): React.ReactElement {
  return (
    <ProductsContainer>
      {products.map((product) => (
        <Product name={product.name} desc={product.desc} price={product.price} />
      ))}
    </ProductsContainer>
  );
}
