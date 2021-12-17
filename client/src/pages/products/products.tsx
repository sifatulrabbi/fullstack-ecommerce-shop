import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductsPageContainer, Button } from './products.styles';
import { findProduct } from '../../mock-db';
import { IProduct } from '../../typings';
import { BsStarFill } from 'react-icons/bs';

export function ProductsPage(): React.ReactElement {
  const [product, setProduct] = React.useState<IProduct | null>(null);
  const params = useParams();

  async function getProduct(): Promise<void> {
    if (!params.productId) return;
    const product = await findProduct(params.productId);

    if (!product) return;
    setProduct(product);
  }

  React.useEffect(() => {
    getProduct();
  }, []);

  function Product({ product }: { product: IProduct }): React.ReactElement {
    return (
      <>
        <img className='image' src={product.img} alt={product.name} />
        <div className='row'>
          <div>
            <h1 className='title'>{product.name}</h1>
            <p className='desc'>{product.desc}</p>
            <div className='wrapper'>
              <div className='price-wrapper'>
                <span className='price'>
                  {'$ '}
                  {product.discount ? (
                    <>
                      <span className='line-through'>{product.price}</span>
                      <span> {product.disc_price}</span>
                    </>
                  ) : (
                    product.price
                  )}
                </span>
              </div>
              <span className='rating'>
                <BsStarFill /> 5.0
              </span>
            </div>
          </div>
          <div className='actions-wrapper'>
            <Button secondary>Add to Cart</Button>
            <Button>Buy now</Button>
          </div>
        </div>
      </>
    );
  }

  function NotFound(): React.ReactElement {
    return (
      <>
        <h1 className='title'>Product not found</h1>
        <p className='desc'></p>
      </>
    );
  }

  return (
    <ProductsPageContainer>
      {product ? <Product product={product} /> : <NotFound />}
    </ProductsPageContainer>
  );
}
