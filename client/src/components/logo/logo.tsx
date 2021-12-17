import { ReactElement } from 'react';
import { Wrapper } from './logo.styles';

interface Props {
  secondary?: boolean;
}

export default function Logo({ secondary }: Props): ReactElement {
  function handleClick(): void {
    window.location.href = '/';
  }

  return (
    <Wrapper onClick={handleClick}>
      <span className='main-text'>EXP</span>
      {secondary && <span className='secondary-text'>Online Shop</span>}
    </Wrapper>
  );
}
