import React from 'react';
import { CartContainer } from './cart.styles';
import { CartItem } from '../../components';
import { IProduct } from '../../typings';
import { products } from '../../mock-db';

export function CartPage(): React.ReactElement {
  const [cartItems, setCartItems] = React.useState<IProduct[]>([...products]);

  return (
    <CartContainer className='container-padding'>
      <h1 className='title'>Your Cart</h1>
      <div className='grid'>
        <div className='wrapper'>
          {cartItems.map((item) => (
            <CartItem
              key={item._id}
              name={item.name}
              total={item.disc_price ? item.disc_price : item.price}
            />
          ))}
        </div>
      </div>
    </CartContainer>
  );
}
