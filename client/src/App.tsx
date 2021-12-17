import { ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './globalStyles';
import { Home, ProductsPage } from './pages';
import { Navbar } from './components';
import { ProductsProvider } from './hooks';

export default function App(): ReactElement {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <ProductsProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<h1>hello world</h1>} />
            <Route path='/shops' element={<h1>hello world</h1>} />
            <Route path='/products/:productId' element={<ProductsPage />} />
          </Routes>
        </ProductsProvider>
      </ThemeProvider>
    </Router>
  );
}
