import React from 'react';
import { ModalContainer, Button } from './purchase-modal.styles';
import { FaTimes } from 'react-icons/fa';
import { Overlay } from '../overlay/overlay';

interface Props {
  title: string;
  text: string;
  active: boolean;
  closeFnc: () => void;
}

export function PurchaseModal({
  title,
  text,
  active,
  closeFnc,
}: Props): React.ReactElement {
  const [amount, setAmount] = React.useState<number>(1);

  function increaseAmount(): void {
    setAmount((prev) => prev + 1);
  }

  function decreaseAmount(): void {
    if (amount == 1) return;
    setAmount((prev) => prev - 1);
  }

  return (
    <>
      <Overlay active={active} closeFnc={closeFnc} />
      <ModalContainer active={active}>
        <button className='flex-center close-btn' onClick={closeFnc}>
          <FaTimes />
        </button>
        <h4 className='title'>{title}</h4>
        <p className='text'>{text}</p>
        <div className='amount'>
          Amount:
          <button className='flex-center' onClick={decreaseAmount}>
            -
          </button>
          <span>{amount}</span>
          <button className='flex-center' onClick={increaseAmount}>
            +
          </button>
        </div>
        <div className='bottom'>
          <Button secondary={true}>Add to Cart</Button>
          <Button>Checkout</Button>
        </div>
      </ModalContainer>
    </>
  );
}
