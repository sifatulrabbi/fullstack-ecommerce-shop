import { ReactElement } from 'react';
import { HomeContainer, Header, Button } from './home.styles';
import { Products } from '../../components';
import { useProducts } from '../../hooks';

export function Home(): ReactElement {
  const { products } = useProducts();

  return (
    <HomeContainer>
      <Header>
        <h1 className='page-title'>Buy From Home</h1>
      </Header>
      <div className='products-container'>
        <Products products={products} />
      </div>
    </HomeContainer>
  );
}
