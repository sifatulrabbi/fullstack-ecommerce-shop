import React from 'react';
import { ProductsContainer } from './products.styles';
import { mockData } from './mock-data';
import { Product } from '../product/product';

interface Props {
  productsData?: [];
}

export function Products({ productsData }: Props): React.ReactElement {
  return (
    <ProductsContainer>
      {mockData.map((data) => (
        <Product name={data.name} desc={data.desc} price={data.price} />
      ))}
    </ProductsContainer>
  );
}
