import { ReactElement } from 'react';
import { HomeContainer, Header, Button } from './home.styles';
import { Products } from '../../components';

export default function Home(): ReactElement {
  return (
    <HomeContainer>
      <Header>
        <h1 className='page-title'>Buy Your Favorite Products From Home</h1>
        <Button>Explore</Button>
      </Header>
      <div className='products-container'>
        <Products />
      </div>
    </HomeContainer>
  );
}
