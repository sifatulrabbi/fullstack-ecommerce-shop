import React from 'react';
import { Button, CartContainer } from './cart.styles';
import { CartItem } from '../../components';
import { IProduct } from '../../typings';
import { products } from '../../mock-db';
import { Link } from 'react-router-dom';

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
        <div className='wrapper total'>
          <div className='cart-total'>
            <span>Your Total</span>
            <span className='amount'>$ 5000</span>
          </div>
          <div className='cart-actions'>
            <Link to='/'>
              <Button secondary>Go back</Button>
            </Link>
            <Link to='/checkout'>
              <Button>Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </CartContainer>
  );
}
