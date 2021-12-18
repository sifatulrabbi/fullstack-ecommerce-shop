import React from 'react';
import { ProductContainer, Button } from './product-card.styles';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  price: number;
  summary: string;
  img?: string;
  id: string;
}

export function ProductCard({ name, price, summary, img, id }: Props): React.ReactElement {
  return (
    <ProductContainer>
      <Link to={`/products/${id}`}>
        <img className='product-img' src={img} alt='product' />
        <div className='wrapper'>
          <h4 className='name'>{name}</h4>
          <p className='desc'>{summary}</p>
        </div>
      </Link>
      <div className='wrapper bottom'>
        <span className='price'>
          {'$'} {price}
        </span>
        <Button>Buy now</Button>
      </div>
    </ProductContainer>
  );
}
