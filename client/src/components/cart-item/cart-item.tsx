import React from 'react';
import { CartItemContainer } from './cart-item.styles';

interface Props {
  name: string;
  total: string;
  qty: string;
  increment: (prodId: string) => void;
  decrement: (prodId: string) => void;
}

export function CartItem({ name, total, qty, increment, decrement }: Props): React.ReactElement {
  return (
    <CartItemContainer>
      <h3 className='name'>{name}</h3>
    </CartItemContainer>
  );
}
