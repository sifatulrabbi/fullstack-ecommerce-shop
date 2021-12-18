import { ReactElement } from 'react';
import { Wrapper } from './logo.styles';
import { useNavigate } from 'react-router-dom';

interface Props {
  secondary?: boolean;
}

export default function Logo({ secondary }: Props): ReactElement {
  const navigate = useNavigate();

  function handleClick(): void {
    navigate('/');
  }

  return (
    <Wrapper onClick={handleClick}>
      <span className='main-text'>EXP</span>
      {secondary && <span className='secondary-text'>Online Shop</span>}
    </Wrapper>
  );
}
