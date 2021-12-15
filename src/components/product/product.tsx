import React from 'react';
import { ProductContainer, Button } from './product.styles';
import { product_1 } from '../../assets';
import { PurchaseModal } from '../purchase-modal/purchase-modal';

interface Props {
  name: string;
  price: number;
  desc: string;
}

export function Product({ name, price, desc }: Props): React.ReactElement {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  function togglePurchaseModal(): void {
    setShowModal((prev) => !prev);
  }

  return (
    <>
      <PurchaseModal
        title={name}
        text={desc}
        active={showModal}
        closeFnc={togglePurchaseModal}
      />
      <ProductContainer>
        <h4 className='name padding'>{name}</h4>
        <img className='product-img' src={product_1} alt='product' />
        <p className='desc padding'>{desc}</p>
        <div className='bottom padding'>
          <p className='price'>
            {'$'} {price}
          </p>
          <Button onClick={togglePurchaseModal}>Purchase</Button>
        </div>
      </ProductContainer>
    </>
  );
}
