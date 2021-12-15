import React from 'react';
import { ProductContainer, Button } from './product.styles';
import { product_1 } from '../../assets';

interface Props {
  name?: string;
  price?: number;
  desc?: string;
}

export function Product({ name, price, desc }: Props): React.ReactElement {
  return (
    <ProductContainer>
      <h4 className='name padding'>{name}</h4>
      <img className='product-img' src={product_1} alt='product' />
      <p className='desc padding'>{desc}</p>
      <div className='bottom padding'>
        <p className='price'>
          {'$'} {price}
        </p>
        <Button>Purchase</Button>
      </div>
    </ProductContainer>
  );
}
