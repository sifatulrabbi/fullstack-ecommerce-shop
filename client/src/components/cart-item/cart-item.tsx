import React from 'react';
import { CartItemContainer } from './cart-item.styles';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';

interface Props {
  name: string;
  total: number;
  qty?: string;
  increment?: (prodId: string) => void;
  decrement?: (prodId: string) => void;
  remove?: (prodId: string) => void;
}

export function CartItem({ name, total, qty, increment, decrement }: Props): React.ReactElement {
  return (
    <CartItemContainer>
      <div className='wrapper'>
        <span className='name'>{name}</span>
        <div className='amount-wrapper flex-center'>
          <button className='btn flex-center'>
            <FaMinus />
          </button>
          <span className='quantity'>01</span>
          <button className='btn flex-center'>
            <FaPlus />
          </button>
        </div>
      </div>
      <p className='total'>&#36;{total}</p>
      <button className='rmv-btn flex-center'>
        <FaTimes />
      </button>
    </CartItemContainer>
  );
}
