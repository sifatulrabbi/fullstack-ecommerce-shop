import React from 'react';
import { IProduct } from '../typings';
import { products as mockProducts } from '../mock-db';

interface IProductContext {
  products: IProduct[];
  updateProducts: (products: IProduct[]) => void;
}

interface Props {
  children: React.ReactNode;
}

const ProductsContext = React.createContext<IProductContext>({
  products: [],
  updateProducts: (products: IProduct[]): void => {},
});

export function useProducts() {
  return React.useContext(ProductsContext);
}

export function ProductsProvider({ children }: Props): React.ReactElement {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  function updateProducts(products: IProduct[]): void {
    setProducts((prev) => {
      return prev.length > 0 ? [...prev, ...products] : [...products];
    });
  }

  React.useEffect(() => {
    updateProducts(mockProducts);
  }, []);

  return (
    <ProductsContext.Provider value={{ products, updateProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
